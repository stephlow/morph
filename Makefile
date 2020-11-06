dev:
	deno run -A morph/cli.ts dev

build:
	deno run -A morph/cli.ts build

export:
	deno run -A morph/cli.ts export

start:
	deno run --allow-net --allow-read morph/cli.ts start
