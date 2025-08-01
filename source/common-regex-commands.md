# Common regex Commands
---
## Replacements

|	Find -> Replace |	RegEx Find		|	RegEx Replace	|
|	--------------- |	----------		| 	-------------	|
|	`**stuff**`     |	`\*\*(.*?)\*\*`	|	`<em>$1</em>`	|
|	`“stuff”`       |	`“(.*?)”`		|	`<q>$1</q>`		|

---
## Removal

|   Content to Remove   |	RegEx Find                                          |	RegEx Replace                           |
|   -----------------   |	----------                                          | 	-------------							|
|   `<image>`           |   `^([ \t]*)<image([\s\S]*?)>([\s\S]*?)</image>\n`    |	`$1<$2> temporarily omitted </$2>\n`	|
