# Docker Problems

Worker depends on the Node's container runtime to create and operate Cells.

## Check Docker health

Confirm the Docker service is running and can start a simple container independently of HivePanel.

## Check Worker access

Worker must have the permissions required to communicate with Docker according to the supported HivePanel deployment method.

## Check storage

Container image pulls and writable layers fail when the Docker storage filesystem is full.

## Check images

If only one Comb fails, verify that its configured image exists and can be pulled by the Node.
