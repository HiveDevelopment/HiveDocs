# Startup and variables

Open **Cell → Startup** to view the current startup command, editable Comb variables and offered Docker images.

Saved Cell values take precedence over Comb defaults. A blank value, `0` or `false` is still a value when the variable's validation allows it. Hidden or administrator-controlled variables cannot be edited here.

Select a compatible image from the Comb's list—for example, the Java version required by a Minecraft loader. Running Cells apply queued runtime changes on their next stop/start.

## Shutdown override

Set **Shutdown command override** to use a different console command for this Cell. Leave it blank to use the Comb's shutdown settings. Signal-only applications should use a Comb with an empty stop command and the appropriate signal.

Reinstalling should retain existing variable values for review. Confirm the values and backup/replacement choice before proceeding. To choose another offered template, use [Switch Comb](/cells/switch-comb).
