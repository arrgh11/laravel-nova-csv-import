import Main from './components/Main.vue'
import Preview from './components/Preview.vue'
import Review from './components/Review.vue'

Nova.booting((Vue, router, store) => {
    router.addRoutes([
        {
            name: 'csv-import',
            path: '/csv-import',
            component: Main,
        },
        {
            name: 'csv-import-preview',
            path: '/csv-import/preview/:file',
            component: Preview,
            props: route => {
                return {
                    file: route.params.file,
                }
            },
        },
        {
            name: 'csv-import-review',
            path: '/csv-import/review/:file',
            component: Review,
            props: route => {
                return {
                    file: route.params.file,
                }
            },
        },
    ])
})
