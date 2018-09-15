<div align="center">

# circuit-deck

A [mdx-deck](https://github.com/zeit/next.js/) starter repo, preconfigured with SumUp's [Circuit UI](https://www.npmjs.com/package/@sumup/circuit-ui) component library and SumUp's [Foundry](https://www.npmjs.com/package/@sumup/foundry) CLI toolkit for writing JavaScript.

</div>

## Development

To run the presentation deck in development mode:

```sh
yarn start
```

Edit the [`deck.mdx`](deck.mdx) file to get started.

## Exporting

To build the presentation deck as static HTML:

```sh
yarn build
```

To export a PDF:

```sh
yarn pdf
```

To export an image of the title slide:

```sh
yarn image
```

## Deploying

To deploy the presentation to GitHub Pages:

```sh
yarn deploy
```

For more documentation see the [mdx-deck][] repo.

[mdx-deck]: https://github.com/jxnblk/mdx-deck
