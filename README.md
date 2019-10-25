## prepare

install deps with ```yarn```

## tsbuildinfo

```yarn tsc``` generates a tsbuildinfo-file

```yarn webpack --mode development``` with transpileOnly it saves a tsbuildinfo-file to disk but it requires noEmit: false. this is unfortunate as it writes declaration files which shouldn't be written to the output for regular applications.

```yarn webpack-dev-server --watch --port 3000 --mode development``` doesn't save a tsbuildinfo-file to disk (even with transpileOnly not set)

