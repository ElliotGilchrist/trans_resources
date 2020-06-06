# trans_resources
Resources for trans and questioning folx

## Contributing

If you want something added to this site but arent comfortable enough with git or any other of the tools used here, feel free to just open an issue, or hit me up at transresources@elliotgilchrist.com

If you do want to create a pull request, the resources.json contains all of the resources, with titles, links and descriptions. Just add to that json. Bonus points if you validate the json and build it, as described below :)

Feel free to suggest changes to the layout/styling of the site too, i'm not much a designer :P

## Building

Make sure you have [Node.js](https://nodejs.org/en/download/) installed

Run `npm install` to install dependencies.

Run `nodejs build.js` to build the site, this will read from the resources.json and template.html and overwrite the index.html file.