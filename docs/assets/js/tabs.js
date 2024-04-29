/**
 * This code is taken from https://github.com/ministryofjustice/moj-frontend/blob/main/assets/javascript/tabs.js
 * but has been modified to remove the jQuery dependency.
 */

const Tabs = function (container) {
  this.container = container
  this.keys = { left: 37, right: 39, up: 38, down: 40 }
  this.cssHide = 'app-tabs__panel--hidden'
  this.tabs = container.querySelectorAll('.app-tabs__tab')
  this.panels = container.querySelectorAll('.app-tabs__panel')

  this.container.querySelectorAll('[role=tab]').forEach((tab) => {
    tab.addEventListener('click', this.onTabClick.bind(this))
    tab.addEventListener('keydown', this.onTabKeydown.bind(this))
  })

  // TODO: this class doesn't exist???
  /*
  this.container
    .querySelector('.app-tabs__close')
    .addEventListener('click', this.onCloseButtonClick.bind(this))
  */
  this.setupHtml()
}

Tabs.prototype.hasTab = function (hash) {
  return this.container.querySelector(hash).length
}

Tabs.prototype.hideTab = function (tab) {
  this.unhighlightTab(tab)
  this.hidePanel(tab)
}

Tabs.prototype.showTab = function (tab) {
  this.highlightTab(tab)
  this.showPanel(tab)
}

Tabs.prototype.getTab = function (hash) {
  return this.tabs.filter('a[href="' + hash + '"]')
}

Tabs.prototype.setupHtml = function () {
  this.container
    .querySelector('.app-tabs__list')
    .setAttribute('role', 'tablist')
  this.container
    .querySelector('.app-tabs__list-item')
    .setAttribute('role', 'presentation')
  this.tabs.forEach(function (tab) {
    tab.setAttribute('role', 'tab')
  })
  this.panels.forEach(function (panel) {
    panel.setAttribute('role', 'tabpanel')
  })

  this.tabs.forEach((tab) => {
    let panelId = this.getHref(tab).slice(1)
    tab.id = 'tab_' + panelId
    tab.setAttribute('aria-controls', panelId)
  })

  this.tabs.forEach((tab) => {
    let panelId = this.getHref(tab).slice(1)
    tab.id = 'tab_' + panelId
    tab.setAttribute('aria-controls', panelId)
  })
  this.panels.forEach((panel, i) => {
    panel.setAttribute('aria-labelledby', this.tabs[i].id)
    panel.classList.add(this.cssHide)
  })
}

Tabs.prototype.onTabClick = function (e) {
  e.preventDefault()
  let newTab = e.target
  let currentTab = this.getCurrentTab()
  if (currentTab) {
    this.hideTab(currentTab)
  }
  if (newTab !== currentTab) {
    this.showTab(newTab)
  }
}

Tabs.prototype.onTabKeydown = function (e) {
  switch (e.keyCode) {
    case this.keys.left:
    case this.keys.up:
      this.activatePreviousTab()
      e.preventDefault()
      break
    case this.keys.right:
    case this.keys.down:
      this.activateNextTab()
      e.preventDefault()
      break
  }
}

Tabs.prototype.activateNextTab = function () {
  const currentTab = this.getCurrentTab()
  const nextTab =
    currentTab?.parentElement?.nextElementSibling?.querySelector('[role=tab]')
  if (nextTab) {
    this.hideTab(currentTab)
    this.showTab(nextTab)
    nextTab.focus()
  }
}

Tabs.prototype.activatePreviousTab = function () {
  let currentTab = this.getCurrentTab()
  let previousTab =
    currentTab?.parentElement?.previousElementSibling?.querySelector(
      '[role=tab]'
    )
  if (previousTab) {
    this.hideTab(currentTab)
    this.showTab(previousTab)
    previousTab.focus()
  }
}

Tabs.prototype.showPanel = function (tab) {
  document.querySelector(this.getHref(tab)).classList.remove(this.cssHide)
}

Tabs.prototype.hidePanel = function (tab) {
  document.querySelector(this.getHref(tab)).classList.add(this.cssHide)
}

Tabs.prototype.unhighlightTab = function (tab) {
  tab.setAttribute('aria-selected', 'false')
}

Tabs.prototype.highlightTab = function (tab) {
  tab.setAttribute('aria-selected', 'true')
}

Tabs.prototype.getCurrentTab = function () {
  return this.container.querySelector('[role=tab][aria-selected=true]')
}

// this is because IE doesn't always return the actual value but a relative full path
// should be a utility function most prob
// http://labs.thesedays.com/blog/2010/01/08/getting-the-href-value-with-jquery-in-ie/
Tabs.prototype.getHref = function (tab) {
  let href = tab.getAttribute('href')
  return href.slice(href.indexOf('#'), href.length)
}

Tabs.prototype.onCloseButtonClick = function (e) {
  let currentTab = this.getCurrentTab()
  this.hideTab(currentTab)
  this.tabs.first().focus()
}

document
  .querySelectorAll('[data-module="app-tabs"]')
  .forEach(function (element) {
    new Tabs(element)
  })
