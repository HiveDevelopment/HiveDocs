# Testing a Comb

Test a Comb as if you were a user deploying it for the first time.

## Fresh install test

Create a completely new Cell with an empty data directory. Confirm the installation steps finish and the expected files are created.

## Startup test

Start the Cell and confirm the process remains online, console output is normal and the service listens on its configured port.

## Variable test

Test non-default variable values, especially alternate versions and memory settings.

## Failure test

Try a deliberately invalid version or unavailable download and confirm the resulting error is understandable rather than leaving the Cell in an unexplained state.
