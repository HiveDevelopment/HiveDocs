# Network and firewall

## Allocations

Under **Cell → Network**, manage assigned IP/port pairs, choose the primary allocation and add notes. Available allocations and limits are controlled by administrators.

Docker port changes apply when the Cell is stopped and started again. Old live ports remain reserved until the change is acknowledged. Remove or retarget any domain/subdomain using an allocation before releasing it.

## Firewall

Under **Cell → Firewall**, enable a policy, choose the default allow/deny action and add ordered IP/CIDR rules. Restrict a rule to one allocation port or apply it to all Cell ports. The first matching rule wins.

For default-deny, add the required allow rules before applying. Test access from a separate client.

This currently requires Linux Docker bridge/NAT networking with the supported iptables backend. It covers published allocations and managed proxy routes, not every possible host/network path. A tunnel or upstream proxy can hide the original client IP. These rules are not upstream DDoS protection.

See [Node networking](/nodes/networking) for reachability and [domains](/cells/domains) for hostnames.
