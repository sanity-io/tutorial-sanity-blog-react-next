# Blogging with Sanity and Next.js

[Read the tutorial](https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js?utm_source=github&github_campaing=rbt)

## Get started

```sh
# Install the Sanity command line interface
~/
> npm i -g @sanity/cli

# Install Sanity in a separate folder
~/blog-backend
> sanity init

# Insert the projectId and dataset name from Sanity in client.js
~/sanity-blog-tutorial
> nano client.js

# Install frontend dependencies
~/sanity-blog-tutorial
> npm install

# Run Next.js in development mode
~/sanity-blog-tutorial
> npm run dev
```

## Deploy as a static site

[Read the tutorial](https://www.sanity.io/blog/tutorial-host-your-sanity-based-next-js-project-on-netlify?utm_source=github&utm_campaign=netlifyexport)

```sh
~/sanity-blog-tutorial
npm run export
# exports your site as static files in /out
```
