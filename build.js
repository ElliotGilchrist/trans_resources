const fs = require('fs')
const { JSDOM } = require('jsdom')
const { forEach } = require('lodash')

const template = fs.readFileSync('template.html', 'utf8')
const resourceData = JSON.parse(fs.readFileSync('resources.json', 'utf8'))

const dom = new JSDOM(template)
const { window } = dom
const { document } = window

const resourcesEl = document.querySelector('#resources')

resourceData.groups.forEach(({ title: groupTitle, items }) => {
    // Create and append Group Element
    const groupEl = document.createElement('div')
    groupEl.className = "group"
    resourcesEl.appendChild(groupEl)
    // Create and append Title element
    const groupTitleEl = document.createElement('div')
    groupTitleEl.className = "group-title"
    groupTitleEl.appendChild(document.createTextNode(groupTitle))
    groupEl.appendChild(groupTitleEl)
    // Create and append Item elements
    items.forEach(({ title: itemTitle, link, description }) => {
        // Create and append Link element
        const linkEl = document.createElement('a')
        linkEl.className = 'item-link'
        linkEl.href = link
        linkEl.target = '_blank'
        if (link) groupEl.appendChild(linkEl)
        // Create and append Item element
        const itemEl = document.createElement('div')
        itemEl.className = "item"
        if (link) {
            linkEl.appendChild(itemEl)
        } else {
            groupEl.appendChild(itemEl)
        }
        // Create and append Title element
        const itemTitleEl = document.createElement('div')
        itemTitleEl.className = "item-title"
        itemTitleEl.appendChild(document.createTextNode(itemTitle))
        itemEl.appendChild(itemTitleEl)
        // Create and append Description element
        const itemDescriptionEl = document.createElement('div')
        itemDescriptionEl.className = "item-description"
        itemDescriptionEl.appendChild(document.createTextNode(description))
        itemEl.appendChild(itemDescriptionEl)
    })
})

fs.writeFileSync('index.html', dom.serialize())