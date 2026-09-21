# Setting up MySQL

MySQL or MariaDB provides the database used by HivePanel to store application data. This guide covers creating a dedicated database and user for Panel.

[[toc]]

::: warning Before you continue
Do not use the MySQL `root` account for HivePanel. Create a dedicated database and user with access only to the HivePanel database.
:::

## Creating a database for HivePanel

The Panel needs a database it can use for its application data. The examples below use `hivepanel` for both the database and database user, but you can choose different names if required.

### Logging in

First, log in to the MySQL or MariaDB command line using an administrative account.

```bash
# MariaDB
mariadb -u root -p

# MySQL
mysql -u root -p
```

Enter the database administrator password when prompted.

On some Linux installations, MariaDB may be configured to authenticate the local root user through the operating system instead. In that case you may need to use your distribution's normal administrative login method.

### Creating a user

Create a dedicated user for HivePanel. If Panel and the database are running on the same machine, restricting the account to `127.0.0.1` prevents it from being used remotely.

```sql
CREATE USER 'hivepanel'@'127.0.0.1' IDENTIFIED BY 'change-this-password';
```

Replace `change-this-password` with a strong, unique password. You will need the same credentials when configuring Panel.

::: tip Panel on another host
If your database is hosted on another machine, replace `127.0.0.1` with the IP address that the Panel server will connect from. Avoid using `%` unless you specifically require connections from multiple addresses.
:::

### Creating the database

Create a database for HivePanel:

```sql
CREATE DATABASE hivepanel;
```

For a new installation, HivePanel will create and manage its own tables inside this database during the application setup and migration process.

### Assigning permissions

Grant the HivePanel user access to the database:

```sql
GRANT ALL PRIVILEGES ON hivepanel.* TO 'hivepanel'@'127.0.0.1';
```

If you used a different host when creating the user, use the same host here.

You can then leave the database console:

```sql
EXIT;
```

## Configuring Panel

Add the database connection details to the Panel environment configuration. The exact file and installation workflow are covered in [Configure Panel](/installation/panel-configuration), but the database values will normally correspond to:

```dotenv
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=hivepanel
DB_USERNAME=hivepanel
DB_PASSWORD=change-this-password
```

Keep the database bound to localhost when Panel and MySQL are on the same server. There is no reason to expose the database publicly for a normal single-server Panel installation.

## Using a remote database server

HivePanel can use a database running on another host. In that configuration, the database server must listen on an interface reachable by the Panel server and its firewall must permit the connection.

### Creating the remote user

On the database server, create the user using the Panel server's IP address rather than `127.0.0.1`:

```sql
CREATE USER 'hivepanel'@'PANEL_IP' IDENTIFIED BY 'change-this-password';
GRANT ALL PRIVILEGES ON hivepanel.* TO 'hivepanel'@'PANEL_IP';
```

Replace `PANEL_IP` with the actual source address used by the Panel server.

### Allowing remote connections

MySQL and MariaDB are commonly configured to listen only on a local interface. If the database is remote, configure the server to listen on the private or otherwise appropriate interface used by Panel.

The configuration file location varies between distributions and between MySQL and MariaDB. Look for the server's `bind-address` setting and configure it for the interface that should accept database connections.

For example:

```ini
[mysqld]
bind-address=10.0.0.10
```

Restart MySQL or MariaDB after changing its configuration.

::: danger Do not expose MySQL unnecessarily
Avoid binding MySQL to `0.0.0.0` and opening port `3306` to the entire Internet. Prefer a private network, VPN, firewall allow-list, or another trusted network path between Panel and the database server.
:::

Your firewall should allow TCP port `3306` only from the Panel server or other systems that genuinely require database access.

## Testing the connection

From the Panel server, you can test the credentials before continuing with the HivePanel installation:

```bash
mysql -h 127.0.0.1 -P 3306 -u hivepanel -p hivepanel
```

For a remote database, replace `127.0.0.1` with the database server address.

If the login succeeds and the `hivepanel` database is accessible, the database side of the Panel setup is ready.

## Creating a Database Host for Cells

The database configured above is the **Panel application database**. It stores HivePanel's own application data and should not be used for databases belonging to game servers.

HivePanel can also manage separate MySQL or MariaDB hosts for Cells. When a Cell database is created through Panel, HivePanel uses the configured database host to create the database and its database user automatically.

::: tip Database hosts are separate from Nodes
A database host is not part of the Panel → Node → Worker → Cell hierarchy. It is a separate infrastructure service registered with Panel. The MySQL or MariaDB server may run on the same machine as a Node, on the Panel server, or on a dedicated database server.
:::

### Creating the management user

HivePanel needs a database account with permission to create and remove databases and users on the database host.

Log in to MySQL or MariaDB as an administrative user, then create a dedicated account for HivePanel.

If Panel connects to the database host from another machine, replace `PANEL_IP` with the IP address that the Panel server will connect from:

```sql
CREATE USER 'hivepanel_host'@'PANEL_IP' IDENTIFIED BY 'change-this-password';
```

Use a strong, unique password. This account is for HivePanel's database-host management only and should not be shared with Cells.

If the database host and Panel are on the same machine, you can restrict the account to localhost instead:

```sql
CREATE USER 'hivepanel_host'@'127.0.0.1' IDENTIFIED BY 'change-this-password';
```

### Assigning permissions

HivePanel must be able to create databases, create database users, grant those users access to their databases, and remove them again when required.

Grant the management account the required privileges:

```sql
GRANT ALL PRIVILEGES ON *.* TO 'hivepanel_host'@'PANEL_IP' WITH GRANT OPTION;
```

If you created the account for `127.0.0.1`, use the same host in the `GRANT` statement:

```sql
GRANT ALL PRIVILEGES ON *.* TO 'hivepanel_host'@'127.0.0.1' WITH GRANT OPTION;
```

::: warning Protect this account
This account has significantly more database privileges than the account used by the HivePanel application database. Restrict it to the Panel server's source address wherever possible and do not use `%` unless your network design specifically requires it.
:::

### Allowing external database access

If Panel or the Cells using this database host are on another machine, MySQL or MariaDB must listen on an address reachable from those systems.

The configuration file location varies by distribution. Common locations include files under `/etc/mysql/`, `/etc/my.cnf`, or `/etc/my.cnf.d/`.

You can search for the active configuration with:

```bash
find /etc -iname 'my.cnf' -o -iname 'mysqld.cnf'
```

Configure `bind-address` for the interface that should accept database connections. For example, if the database host has a private address of `10.0.0.20`:

```ini
[mysqld]
bind-address=10.0.0.20
```

Restart MySQL or MariaDB after changing the configuration.

::: danger Avoid exposing MySQL publicly
Do not open port `3306` to the entire Internet unless you have a specific reason to do so. Prefer a private network, VPN, firewall allow-list, or another trusted network path between Panel, Nodes and the database host.
:::

Your firewall must permit TCP port `3306` from:

- the **Panel server**, so HivePanel can create and manage databases and users;
- any **Nodes hosting Cells** that need to connect to databases on this host.

You do not need to allow every Node if only specific Nodes will use the database host.

### Database hosts on the same Node

A database host can run on the same physical machine as a HivePanel Node. However, remember that Cells run in isolated containers, so `127.0.0.1` from inside a Cell refers to the Cell itself rather than the Node's host operating system.

Use an address that the Cell containers can actually reach, such as the Node's private network address or an appropriate container bridge/gateway address for your installation.

::: info Worker and database access
Worker does not use the database host as part of normal Cell management. Panel uses the management account to provision databases, while the game server running inside the Cell connects using the database credentials created for that Cell.
:::

### Testing the management account

From the Panel server, test that the database host can be reached using the management account:

```bash
mysql -h DATABASE_HOST -P 3306 -u hivepanel_host -p
```

Replace `DATABASE_HOST` with the address of the MySQL or MariaDB server.

Once connected, you can verify that the account can create and remove a temporary database:

```sql
CREATE DATABASE hivepanel_test;
DROP DATABASE hivepanel_test;
```

If both statements succeed, the account has the database-level access HivePanel requires.

### Registering the Database Host in Panel

Once the MySQL or MariaDB server is reachable and the management account is ready, add it as a Database Host in HivePanel.

You will need the following information:

| Setting | Description |
| --- | --- |
| **Name** | A friendly name used to identify the database host in Panel. |
| **Host** | The hostname or IP address of the MySQL or MariaDB server. |
| **Port** | The database port. MySQL and MariaDB normally use `3306`. |
| **Username** | The management account created above, such as `hivepanel_host`. |
| **Password** | The management account password. |

After saving the host, HivePanel can use it when databases are created for Cells.

### Databases created for Cells

When a database is assigned to a Cell, HivePanel creates separate credentials for that database. The Cell should use those generated credentials rather than the Database Host management account.

This keeps the access model separated:

```text
Panel
  │
  │ Database Host management credentials
  ▼
MySQL / MariaDB
  │
  ├── Cell database + Cell user
  ├── Cell database + Cell user
  └── Cell database + Cell user
```

A Cell database user should only have access to the database or databases allocated to that Cell. It should never receive the Database Host management credentials or access to the HivePanel application database.

::: info Architecture note
Workers do not connect directly to the HivePanel application database. Panel owns HivePanel's application data and manages configured Database Hosts. Workers run on Nodes and carry out the instructions required to manage Cells.
:::

## Next step

Continue with [Install Panel](/installation/panel) or, if Panel is already installed, [Configure Panel](/installation/panel-configuration).
