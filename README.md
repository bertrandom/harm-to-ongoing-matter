# harm to ongoing matter

A Twitter bot that posts every page of the Mueller report in a thread

## Usage

First, you need to tweet the first page of the report:

![first page](/data/report-001.png?raw=true "First Page")

Determine what the status ID of the tweet is.

Copy `config/default.json5` to `config/local.json5` and fill in your Twitter tokens and the status ID.

For each page of the report that you want to tweet, you can type:

`node bot [page number]`

e.g.

`node bot 2`

You can write another script that just goes through all 448 pages, but remember, you can only tweet 300 times in a 3 hour period. So you'll likely have to post 300 pages, wait 3 hours, and post the remaining pages.

## License

ISC