# Database hosts

The Panel application's database is supplied by its Docker stack. **Cell database hosts** are separate services offered to customer workloads.

1. Add a database host in Admin with the connection and management credentials.
2. Assign it to the Nodes that may use it and configure available capacity/priority.
3. Set the Cell's database allowance.
4. Create databases from the Cell's Databases page.

Use the resulting application credentials inside the workload; do not give it the host's management credentials. Confirm network access from both Panel and the workload as required.

Back up external database content separately from Cell files. Check Node assignments before migrating a Cell that depends on a database.
