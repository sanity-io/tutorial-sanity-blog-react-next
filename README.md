# Blogging with Sanity and Next.js

[Read the tutorial](https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js?utm_source=github&github_campaing=rbt)

## Get started

```sh
# Install the Sanity command line interface
~/
> npm i -g @sanity/cli

# Initiate your own project in the studio folder
~/this-blog/studio
> sanity init

# Add a CORS-origin rule to allow the frontend to request data
~/this-blog/studio
> sanity cors add http://localhost:3000 --no-credentials

# Insert the projectId and dataset name from Sanity in client.js
~/this-blog/web
> nano client.js

# Install frontend dependencies
~/this-blog/web
> npm install

# Run Next.js in development mode
~/this-blog/web
> npm run dev
```

## Deploy on vercel

```sh
~/this-blog/web
> npm i -g vercel
> vercel login
> vercel
```

## Deploy as a static site on Netlify

[Read the tutorial](https://www.sanity.io/blog/tutorial-host-your-sanity-based-next-js-project-on-netlify?utm_source=github&utm_campaign=netlifyexport)

```sh
~/this-blog/web
npm run export
# exports your site as static files in /out
```
