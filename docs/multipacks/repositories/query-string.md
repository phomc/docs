# Query String
Query strings are used to search for a particular pack. You can search:

- All packs with version newer than ``1.2.3``
- All packs with name ``cool-pack``
- Pack with name ``cool-pack`` and version newer than ``1.2.3``

## Query string format
### Combine multiple queries
```
query1; query2; query3; ...
Eg: name 'cool-pack-name'; version >= 1.0.0; version <= 2.0.0
```

### Exact name query
```
name 'pack-name'
name "pack-name"

Eg: name 'cool-pack-name'
```

### Version query
```
version >= 1.0.0
version <= 1.0.1
version > 1.0.0
version < 2.0.0
version == 1.2.3

Eg: version >= 14.0.1
```
