<script setup lang="ts">
function openSearch() {
    const searchButton = document.querySelector<HTMLButtonElement>('.DocSearch-Button, .VPNavBarSearchButton')
    searchButton?.click()
}

const journeys = [
    {
        eyebrow: 'Get started',
        title: 'Install HivePanel',
        description: 'Install the Docker-based Panel, connect a Worker and create your first Cell.',
        link: '/installation/',
        action: 'Installation guide',
    },
    {
        eyebrow: 'Run servers',
        title: 'Manage Cells',
        description: 'Run games, websites and applications. Manage files, content, domains and saved instances.',
        link: '/cells/',
        action: 'Cell documentation',
    },
    {
        eyebrow: 'Extend the hive',
        title: 'Build Combs',
        description: 'Publish templates and application recipes through HiveRegistry.',
        link: '/combs/',
        action: 'Comb documentation',
    },
]

const browse = [
    { name: 'Nodes & networking', description: 'Worker connectivity, allocations and the managed web proxy.', link: '/nodes/' },
    { name: 'Panel customisation', description: 'Offered themes, design tokens and language files.', link: '/administration/appearance' },
    { name: 'Nectar extensions', description: 'Extension pages, sidebar integration and permissions.', link: '/administration/extensions' },
    { name: 'HiveRegistry', description: 'Combs, Minecraft content and application preinstalls.', link: '/registry/' },
    { name: 'Updates & repair', description: 'Keep your Docker deployment healthy and recover safely.', link: '/maintenance/upgrading' },
    { name: 'Troubleshooting', description: 'Find the failing service or operation without starting over.', link: '/troubleshooting/' },
]

const concepts = [
    { name: 'Panel', text: 'Web interface and API', link: '/installation/panel' },
    { name: 'Node', text: 'Compute host', link: '/nodes/' },
    { name: 'Worker', text: 'Node service', link: '/installation/worker' },
    { name: 'Cell', text: 'Server or application', link: '/cells/' },
    { name: 'Comb', text: 'Workload template', link: '/combs/' },
    { name: 'Registry', text: 'Shared catalogue', link: '/registry/' },
]
</script>

<template>
    <main class="relative overflow-hidden">
        <section class="docs-home-hero">
            <div class="docs-home-hero-glow"></div>

            <div class="docs-home-hero-inner">
                <div class="docs-home-hero-content">
                    <div class="docs-home-badge">
                        <span class="docs-home-badge-dot"></span>
                        HivePanel Documentation
                    </div>

                    <h1 class="docs-home-title">
                        Everything you need to
                        <span>run the hive.</span>
                    </h1>

                    <p class="docs-home-description">
                        Install with Docker, connect your Nodes and manage games, websites and applications.
                    </p>

                    <button type="button" class="home-hero-search" @click="openSearch">
                        <svg class="home-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="7" />
                            <path d="m20 20-3.5-3.5" />
                        </svg>
                        <span class="home-search-placeholder">Search installation, Cells, Combs, troubleshooting...</span>
                        <span class="home-search-shortcut">Ctrl K</span>
                    </button>
                </div>

                <div class="docs-home-journeys">
                    <a
                        v-for="journey in journeys"
                        :key="journey.title"
                        :href="journey.link"
                        class="docs-home-journey"
                    >
                        <div class="docs-home-journey-glow"></div>
                        <p class="docs-home-journey-eyebrow">{{ journey.eyebrow }}</p>
                        <h2>{{ journey.title }}</h2>
                        <p class="docs-home-journey-description">{{ journey.description }}</p>
                        <span class="docs-home-journey-action">
                            {{ journey.action }}
                            <span aria-hidden="true">→</span>
                        </span>
                    </a>
                </div>
            </div>
        </section>

        <section class="border-y border-white/[0.06] bg-white/[0.012] px-6 py-20 md:py-24">
            <div class="mx-auto max-w-7xl">
                <div class="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
                    <div>
                        <p class="text-xs font-bold uppercase tracking-[0.25em] text-orange-400">Browse documentation</p>
                        <h2 class="mt-4 text-4xl font-bold tracking-tight text-white">Find your way around.</h2>
                        <p class="mt-5 max-w-md text-sm leading-7 text-zinc-500">
                            Jump directly into the area you are working on, whether you run infrastructure, manage a Cell or contribute to HivePanel.
                        </p>
                    </div>

                    <div class="grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2">
                        <a
                            v-for="item in browse"
                            :key="item.name"
                            :href="item.link"
                            class="group bg-[#0d0d0d] p-5 transition hover:bg-orange-400/[0.035]"
                        >
                            <div class="flex items-center justify-between gap-4">
                                <h3 class="font-bold text-white">{{ item.name }}</h3>
                                <span class="text-zinc-700 transition group-hover:translate-x-0.5 group-hover:text-orange-400">→</span>
                            </div>
                            <p class="mt-2 text-xs leading-6 text-zinc-600 transition group-hover:text-zinc-500">{{ item.description }}</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="px-6 py-20 md:py-28">
            <div class="mx-auto max-w-7xl">
                <div class="rounded-3xl border border-white/[0.07] bg-[#101010]/90 p-6 md:p-8">
                    <div class="flex flex-col justify-between gap-5 border-b border-white/[0.06] pb-7 md:flex-row md:items-end">
                        <div>
                            <p class="text-xs font-bold uppercase tracking-[0.24em] text-orange-400">Core concepts</p>
                            <h2 class="mt-3 text-3xl font-bold tracking-tight text-white">Meet the hive.</h2>
                        </div>
                        <p class="max-w-xl text-sm leading-7 text-zinc-500">The main components, at a glance.</p>
                    </div>

                    <div class="mt-4 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] md:grid-cols-3">
                        <a
                            v-for="concept in concepts"
                            :key="concept.name"
                            :href="concept.link"
                            class="group bg-[#0d0d0d] p-5 transition hover:bg-orange-400/[0.035]"
                        >
                            <div class="mb-5 flex h-9 w-9 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-400/[0.07] text-sm font-bold text-orange-400">
                                {{ concept.name.charAt(0) }}
                            </div>
                            <h3 class="font-bold text-white">{{ concept.name }}</h3>
                            <p class="mt-2 text-xs leading-6 text-zinc-600">{{ concept.text }}</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
