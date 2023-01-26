---
sidebad_position: 0
---

# Using Command-line Interface
## Getting Multipacks CLI binaries
See [this page](../getting-started/getting-multipacks#multipacks-cli) for information on obtaining Multipacks CLI binaries.

## Getting help
Multipacks CLI itself have built-in documentatons. Try typing ``multipacks-cli [subcommands...] -h`` to see help.

```
Multipacks CLI
Usage: java multipacks.cli.Main [-<Options>] (subcommand...)
Options:                  
    --plugin  -P=<value>  Load Multipacks plugin from JAR file
Subcommands:              
  search                  Search across all repositories for packs
  download                Download the specified pack from repositories
  uninstall               Uninstall pack from local repository
  build                   Build pack
  install                 Install pack to local repository
  remote                  Upload or delete pack from remote repository
  info                    View pack index info
```
