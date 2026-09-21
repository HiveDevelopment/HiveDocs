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
        ['meta', { property: 'og:title', content: 'HivePanel Documentation' }],
        ['meta', { property: 'og:description', content: 'Install, configure and operate HivePanel.' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&display=swap' }],
    ],
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
            {
                text: 'Community',
                items: [
                    { text: 'GitHub', link: 'https://github.com/HiveOSSoftware' },
                    { text: 'Join Discord', link: 'https://hivepanel.dev/r/discord' },
                ],
            },
        ],
        sidebar: {
            '/': [
                {
                    text: 'Getting Started',
                    collapsed: false,
                    items: [
                        { text: 'Introduction', link: '/guide/' },
                        { text: 'Quick Start', link: '/getting-started/quick-start' },
                        { text: 'How HivePanel Works', link: '/guide/how-it-works' },
                    ],
                },
                {
                    text: 'Installation',
                    collapsed: false,
                    items: [
                        { text: 'Overview', link: '/installation/' },
                        { text: 'Requirements', link: '/installation/requirements' },
                        { text: 'Set up MySQL', link: '/installation/mysql' },
                        { text: 'Install Panel', link: '/installation/panel' },
                        { text: 'Configure Panel', link: '/installation/panel-configuration' },
                        { text: 'Prepare a Node', link: '/installation/node-preparation' },
                        { text: 'Install Worker', link: '/installation/worker' },
                        { text: 'Post-installation', link: '/installation/post-installation' },
                    ],
                },
                {
                    text: 'Core Concepts',
                    collapsed: true,
                    items: [
                        { text: 'Architecture', link: '/concepts/architecture' },
                        { text: 'Panel', link: '/concepts/panel' },
                        { text: 'Nodes', link: '/concepts/nodes' },
                        { text: 'Worker', link: '/concepts/worker' },
                        { text: 'Cells', link: '/concepts/cells' },
                        { text: 'Combs', link: '/concepts/combs' },
                    ],
                },
                {
                    text: 'Internals',
                    collapsed: true,
                    items: [
                        { text: 'Container Runtime', link: '/internals/container-runtime' },
                    ],
                },
                {
                    text: 'Nodes',
                    collapsed: true,
                    items: [
                        { text: 'Overview', link: '/nodes/' },
                        { text: 'Adding a Node', link: '/nodes/adding-a-node' },
                        { text: 'Worker Connection', link: '/nodes/worker-connection' },
                        { text: 'Resource Planning', link: '/nodes/resources' },
                        { text: 'Networking', link: '/nodes/networking' },
                        { text: 'Storage', link: '/nodes/storage' },
                        { text: 'Maintenance', link: '/nodes/maintenance' },
                    ],
                },
                {
                    text: 'Cells',
                    collapsed: false,
                    items: [
                        { text: 'Overview', link: '/cells/' },
                        { text: 'Creating a Cell', link: '/cells/creating-a-cell' },
                        { text: 'Console', link: '/cells/console' },
                        { text: 'Files', link: '/cells/files' },
                        { text: 'Players', link: '/cells/players' },
                        { text: 'Resources', link: '/cells/resources' },
                        { text: 'Variables & Startup', link: '/cells/variables-startup' },
                        { text: 'Backups', link: '/cells/backups' },
                        { text: 'Schedules', link: '/cells/schedules' },
                        { text: 'Importing', link: '/cells/importing' },
                    ],
                },
                {
                    text: 'Combs',
                    collapsed: false,
                    items: [
                        { text: 'Overview', link: '/combs/' },
                        { text: 'Comb Anatomy', link: '/combs/anatomy' },
                        { text: 'Creating a Comb', link: '/combs/creating-a-comb' },
                        { text: 'Variables', link: '/combs/variables' },
                        { text: 'Installation Steps', link: '/combs/install-steps' },
                        { text: 'Startup Commands', link: '/combs/startup' },
                        { text: 'Docker Images', link: '/combs/images' },
                        { text: 'Testing', link: '/combs/testing' },
                    ],
                },
                {
                    text: 'Users & Security',
                    collapsed: true,
                    items: [
                        { text: 'Overview', link: '/users/' },
                        { text: 'Roles & Permissions', link: '/users/roles-permissions' },
                        { text: 'Cell Access', link: '/users/cell-access' },
                        { text: 'Account Security', link: '/users/security' },
                    ],
                },
                {
                    text: 'Administration',
                    collapsed: true,
                    items: [
                        { text: 'Overview', link: '/administration/' },
                    ],
                },
                {
                    text: 'Maintenance',
                    collapsed: true,
                    items: [
                        { text: 'Overview', link: '/maintenance/' },
                        { text: 'Upgrading HivePanel', link: '/maintenance/upgrading' },
                        { text: 'Backups & Recovery', link: '/maintenance/backups-recovery' },
                        { text: 'Decommission a Node', link: '/maintenance/decommissioning-a-node' },
                    ],
                },
                {
                    text: 'API',
                    collapsed: true,
                    items: [
                        { text: 'API Overview', link: '/api/' },
                    ],
                },
                {
                    text: 'Development',
                    collapsed: true,
                    items: [
                        { text: 'Overview', link: '/development/' },
                        { text: 'Development Setup', link: '/development/setup' },
                        { text: 'Contributing', link: '/development/contributing' },
                    ],
                },
                {
                    text: 'Troubleshooting',
                    collapsed: false,
                    items: [
                        { text: 'Overview', link: '/troubleshooting/' },
                        { text: 'Worker Connectivity', link: '/troubleshooting/worker-connectivity' },
                        { text: 'Cell Installation', link: '/troubleshooting/cell-installation' },
                        { text: 'Cell Startup', link: '/troubleshooting/cell-startup' },
                        { text: 'Docker', link: '/troubleshooting/docker' },
                        { text: 'File Permissions', link: '/troubleshooting/permissions' },
                        { text: 'Reporting a Problem', link: '/troubleshooting/reporting' },
                    ],
                },
            ],
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/HiveOSSoftware' },
            { icon: 'discord', link: 'https://hivepanel.dev/r/discord' },
        ],
        editLink: {
            pattern: 'https://github.com/HiveOSSoftware/docs/edit/main/docs/:path',
            text: 'Edit this page on GitHub',
        },
        footer: {
            message: 'HivePanel is open source software.',
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
