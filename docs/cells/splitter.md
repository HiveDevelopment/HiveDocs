# Server Splitter

Owners can divide a Cell's finite resource allowance into independent child Cells when administrators allow it.

1. Stop the parent Cell.
2. Open **Server Splitter** and choose an offered Comb.
3. Assign part of the CPU, memory, disk and other available allowances.
4. Choose an existing additional allocation and create the split.

The primary allocation stays on the parent. Leave enough disk for its active and saved instances. Unlimited allowances cannot be divided, and splits cannot be nested.

A child is a separate Cell that can run alongside its parent. It does not duplicate the parent's files. To return its recorded resource budget and allocations, stop it and remove it through **Server Splitter**; remove its domains first. Deletion removes the child files.

If removal was interrupted, retry it from this page rather than manually adjusting resource totals. Use [instances](/cells/instances) when you want saved alternatives, not simultaneous servers.
