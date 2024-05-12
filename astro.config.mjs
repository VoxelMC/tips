import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'tips.trevfox.dev',
            social: {
                github: 'https://github.com/VoxelMC',
            },
            editLink: {
                baseUrl: 'https://github.com/VoxelMC/tips/edit/main/',
            },
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        {
                            label: 'Example Guide',
                            link: '/guides/example/',
                        },
                    ],
                },
                {
                    label: 'Foods',
                    autogenerate: {
                        directory: 'foods',
                    },
                },
                {
                    label: 'Lifestyle',
                    autogenerate: {
                        directory: 'lifestyle',
                    },
                },
            ],
        }),
        tailwind(),
    ],
});
