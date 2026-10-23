import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'

export default defineConfig({
    appearance: 'dark',
    lang: 'en-GB',
    title: 'HivePanel Documentation',
    description: 'Guides and reference documentation for installing, configuring and operating HivePanel.',
    cleanUrls: true,
    lastUpdated: true,
    sitemap: {
        hostname: 'https://docs.hivepanel.dev',
    },
    head: [
        ['meta', { name: 'theme-color', content: '#090909', media: '(prefers-color-scheme: dark)' }],
        ['meta', { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' }],
        ['meta', { name: 'color-scheme', content: 'light dark' }],
        ['meta', { property: 'og:site_name', content: 'HivePanel Documentation' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
        ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
        ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
        ['meta', { property: 'og:image', content: 'https://docs.hivepanel.dev/og-image.png' }],
        ['meta', { property: 'og:image:alt', content: 'HivePanel Documentation' }],
        ['meta', { property: 'og:image:width', content: '1200' }],
        ['meta', { property: 'og:image:height', content: '630' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:image', content: 'https://docs.hivepanel.dev/og-image.png' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&display=swap' }],
    ],
    transformPageData(pageData) {
        const base = 'https://docs.hivepanel.dev'
        const route = pageData.relativePath
            .replace(/(^|\/)index\.md$/, '$1')
            .replace(/\.md$/, '')
        const canonical = `${base}/${route}`
        const title = pageData.title
            ? `${pageData.title} | HivePanel Documentation`
            : 'HivePanel Documentation'
        const description = pageData.description || 'Guides and reference documentation for installing, configuring and operating HivePanel.'
        pageData.frontmatter.head ??= []
        pageData.frontmatter.head.push(
            ['link', { rel: 'canonical', href: canonical }],
            ['meta', { property: 'og:title', content: title }],
            ['meta', { property: 'og:description', content: description }],
            ['meta', { property: 'og:url', content: canonical }],
            ['meta', { name: 'twitter:title', content: title }],
            ['meta', { name: 'twitter:description', content: description }],
        )
    },
    vite: {
        plugins: [tailwindcss()],
    },
    themeConfig: {
        siteTitle: false,
        logo: {
            src: 'https://hivepanel.dev/assets/imgs/HivePanelLogo.png',
            alt: 'HivePanel',
        },
        search: {
            provider: 'local',
            options: {
                detailedView: true,
                translations: {
                    button: {
                        buttonText: 'Search docs',
                        buttonAriaLabel: 'Search HivePanel documentation',
                    },
                    modal: {
                        noResultsText: 'No documentation found for',
                        resetButtonTitle: 'Reset search',
                        footer: {
                            selectText: 'to select',
                            navigateText: 'to navigate',
                            closeText: 'to close',
                        },
                    },
                },
            },
        },
        nav: [
            { text: 'Documentation', link: '/guide/' },
            { text: 'Installation', link: '/installation/' },
            { text: 'Cells', link: '/cells/' },
            { text: 'Combs', link: '/combs/' },
            { text: 'API', link: '/api/' },
            { text: 'Nectar SDK', link: '/nectar/' },
            { text: 'Registry', link: '/registry/' },
            {
                text: 'Community',
                items: [
                    { text: 'GitHub', link: 'https://github.com/HiveDevelopment' },
                    { text: 'Join Discord', link: 'https://hivepanel.dev/r/discord' },
                ],
            },
        ],
        sidebar: {
    "/": [
        {
            "text": "Start here",
            "collapsed": false,
            "items": [
                {
                    "text": "Introduction",
                    "link": "/guide/"
                },
                {
                    "text": "Quick start",
                    "link": "/getting-started/quick-start"
                },
                {
                    "text": "Install Panel",
                    "link": "/installation/panel"
                },
                {
                    "text": "Install Worker",
                    "link": "/installation/worker"
                },
                {
                    "text": "Networking",
                    "link": "/nodes/networking"
                }
            ]
        },
        {
            "text": "Cells",
            "collapsed": false,
            "items": [
                {
                    "text": "Overview",
                    "link": "/cells/"
                },
                {
                    "text": "Console",
                    "link": "/cells/console"
                },
                {
                    "text": "Files",
                    "link": "/cells/files"
                },
                {
                    "text": "Startup & variables",
                    "link": "/cells/variables-startup"
                },
                {
                    "text": "Minecraft content",
                    "link": "/cells/content"
                },
                {
                    "text": "Application preinstalls",
                    "link": "/cells/preinstalls"
                },
                {
                    "text": "Network & firewall",
                    "link": "/cells/network"
                },
                {
                    "text": "Domains & subdomains",
                    "link": "/cells/domains"
                },
                {
                    "text": "Instances",
                    "link": "/cells/instances"
                },
                {
                    "text": "Server Splitter",
                    "link": "/cells/splitter"
                },
                {
                    "text": "Switch Comb",
                    "link": "/cells/switch-comb"
                }
            ]
        },
        {
            "text": "Administration",
            "collapsed": true,
            "items": [
                {
                    "text": "Nodes",
                    "link": "/nodes/"
                },
                {
                    "text": "Node web proxy",
                    "link": "/nodes/web-proxy"
                },
                {
                    "text": "Accounts & permissions",
                    "link": "/users/cell-access"
                },
                {
                    "text": "Cell Features",
                    "link": "/administration/cell-features"
                },
                {
                    "text": "Database hosts",
                    "link": "/administration/databases"
                },
                {
                    "text": "Themes & languages",
                    "link": "/administration/appearance"
                },
                {
                    "text": "Nectar extensions",
                    "link": "/administration/extensions"
                }
            ]
        },
        {
            "text": "Combs & Registry",
            "collapsed": true,
            "items": [
                {
                    "text": "Combs",
                    "link": "/combs/"
                },
                {
                    "text": "Author a Comb",
                    "link": "/combs/anatomy"
                },
                {
                    "text": "HiveRegistry",
                    "link": "/registry/"
                },
                {
                    "text": "API access",
                    "link": "/api/"
                }
            ]
        },
        {
            "text": "Maintenance",
            "collapsed": true,
            "items": [
                {
                    "text": "Updates & repair",
                    "link": "/maintenance/upgrading"
                },
                {
                    "text": "Backups & recovery",
                    "link": "/maintenance/backups-recovery"
                },
                {
                    "text": "Troubleshooting",
                    "link": "/troubleshooting/"
                }
            ]
        },
        {
            "text": "Nectar SDK",
            "collapsed": true,
            "items": [
                {
                    "text": "Overview",
                    "link": "/nectar/"
                },
                {
                    "text": "Quick start",
                    "link": "/nectar/quick-start"
                },
                {
                    "text": "Client API",
                    "link": "/nectar/api"
                },
                {
                    "text": "Permissions & network",
                    "link": "/nectar/permissions"
                },
                {
                    "text": "Pages, themes & languages",
                    "link": "/nectar/interface"
                },
                {
                    "text": "Testing & packaging",
                    "link": "/nectar/testing"
                },
                {
                    "text": "Troubleshooting",
                    "link": "/nectar/troubleshooting"
                }
            ]
        },
        {
            "text": "Development",
            "collapsed": true,
            "items": [
                {
                    "text": "Source setup",
                    "link": "/development/setup"
                },
                {
                    "text": "Contributing",
                    "link": "/development/contributing"
                }
            ]
        }
    ]
},
        socialLinks: [
            { icon: 'github', link: 'https://github.com/HiveDevelopment' },
            { icon: 'discord', link: 'https://hivepanel.dev/r/discord' },
        ],
        editLink: {
            pattern: 'https://github.com/HiveDevelopment/HiveDocs/edit/main/docs/:path',
            text: 'Edit this page on GitHub',
        },
        footer: {
            message: 'HivePanel is open source software. · [Privacy Policy](/privacy)',
            copyright: 'Copyright © HivePanel',
        },
        outline: {
            level: [2, 3],
            label: 'On this page',
        },
        docFooter: {
            prev: 'Previous page',
            next: 'Next page',
        },
        lastUpdated: {
            text: 'Last updated',
            formatOptions: {
                dateStyle: 'medium',
                timeStyle: 'short',
            },
        },
    },
})
