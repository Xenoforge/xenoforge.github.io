// products.js - All product data in one place
const products = [
    {
        id: 'smartsearch',
        icon: '🔍',
        name: 'Smart Search',
        tagline: 'Advanced Hierarchy Filtering for Unity',
        description: 'Transform Unity\'s basic hierarchy search into a powerful filtering system with visual query builder, logical operators, and instant results.',
        badges: ['Editor Tool', 'Productivity', 'Unity 2020.3+'],
        storeUrl: 'https://assetstore.unity.com/packages/slug/338596',
        details: {
            subtitle: 'Why Smart Search?',
            intro: `Working on a scene with hundreds of GameObjects? Need to find all enemies with Rigidbody on a specific layer? Want to batch-edit objects with certain component values?
            <br><br>
            <strong style="color: white;">Unity's built-in search falls short.</strong> Smart Search fills the gap with powerful filtering options, logical operators, and preset management.`,
            features: [
                {
                    icon: '🎯',
                    title: 'Visual Query Builder',
                    description: 'Build complex searches without typing a single query string. Dropdown selection for all filter types with auto-complete and real-time feedback.'
                },
                {
                    icon: '⚡',
                    title: 'Component Field Filtering',
                    description: 'Search by component property values (health > 50, speed <= 10). Works with Int, Float, Bool, and String fields with all comparison operators.'
                },
                {
                    icon: '🔗',
                    title: 'Logical Operators',
                    description: 'Combine filters with AND, OR, NOT to create complex queries. Find exactly what you need with precision.'
                },
                {
                    icon: '💾',
                    title: 'Preset System',
                    description: 'Save frequently used searches as reusable presets. One-click application from preset library. Perfect for team workflows.'
                },
                {
                    icon: '🎨',
                    title: 'Multiple Result Actions',
                    description: 'Select All, Select Inverse, Highlight in hierarchy, or Filter View - choose the best action for your workflow.'
                },
                {
                    icon: '🚀',
                    title: 'High Performance',
                    description: 'Searches 1000+ objects in milliseconds. Non-blocking UI with zero performance impact in builds.'
                }
            ],
            sections: [
                {
                    title: 'Key Features',
                    type: 'list',
                    items: [
                        'Visual query builder with dropdown filters',
                        '6 filter types: Name, Tag, Layer, Component, Static, Active',
                        'Component field value filtering with 6 comparison operators',
                        'Logical operators (AND, OR, NOT)',
                        '4 result actions (Select All, Select Inverse, Highlight, Filter View)',
                        'Preset system with ScriptableObject storage',
                        'Context menu integration',
                        'Keyboard shortcuts (Ctrl+H)',
                        'Auto-complete component search',
                        'Live field dropdown for components',
                        'Full source code included',
                        'Comprehensive documentation'
                    ]
                },
                {
                    title: 'Use Cases',
                    type: 'grid',
                    items: [
                        {
                            title: 'Level Design',
                            description: 'Find all trigger colliders, lights on specific layers, disabled spawn points'
                        },
                        {
                            title: 'Debugging',
                            description: 'Locate inactive objects, find objects with specific component states'
                        },
                        {
                            title: 'Optimization',
                            description: 'Find all rigidbodies, heavy renderers, batch process objects'
                        },
                        {
                            title: 'Cleanup',
                            description: 'Find unnamed objects, untagged objects, test objects for deletion'
                        }
                    ]
                },
                {
                    title: 'What\'s Included',
                    type: 'list',
                    items: [
                        'Complete source code (C#)',
                        'Editor window with visual query builder',
                        'Hierarchy highlighting system',
                        'Filter view system with HideFlags',
                        'Preset management system',
                        'Context menu integration',
                        'Comprehensive documentation (README + Asset Store Description)',
                        'Example presets',
                        'Full support'
                    ]
                },
                {
                    title: 'Technical Requirements',
                    type: 'list',
                    items: [
                        'Unity Version: 2020.3 or higher',
                        'Platform: Editor only (no runtime components)',
                        'Dependencies: None - pure C# Unity Editor API',
                        'Integration: Zero setup, works immediately after import',
                        'Compatible with Mono and IL2CPP'
                    ]
                }
            ],
            cta: {
                title: 'Ready to supercharge your Unity workflow?',
                subtitle: 'One-time purchase. Unlimited projects. Lifetime updates.'
            }
        }
    },
    {
        id: 'refsight',
        icon: '🔧',
        name: 'RefSight',
        tagline: 'Detect and fix missing references automatically',
        description: 'Automatically scan your scenes, detect broken references, and fix them with smart suggestions. Save hours of debugging time.',
        badges: ['Editor Tool', 'Debugging', 'Unity 2020.3+'],
        storeUrl: 'https://assetstore.unity.com/packages/slug/337902',
        details: {
            subtitle: 'What It Does',
            intro: 'RefSight automatically scans your Unity scenes and prefabs to detect broken references. See issues directly in the hierarchy with visual indicators, get smart fix suggestions with confidence scores, and resolve problems with a single click.',
            features: [
                {
                    icon: '🔍',
                    title: 'Automatic Detection',
                    description: 'Real-time scanning with visual indicators in hierarchy. Works seamlessly with scenes and prefabs.'
                },
                {
                    icon: '🔧',
                    title: 'Smart Fix Suggestions',
                    description: 'AI-powered suggestions with confidence scores (60-90%). Finds components on same object, parents, or children automatically.'
                },
                {
                    icon: '🕵️',
                    title: 'Missing Script Detective',
                    description: 'Shows deleted script details including original name, file path, and GUID for easy tracking.'
                },
                {
                    icon: '🔎',
                    title: 'Smart Search',
                    description: 'Filter issues quickly: missing:Sprite, component:AudioSource, or severity:critical.'
                },
                {
                    icon: '📦',
                    title: 'Batch Operations',
                    description: 'Fix multiple objects at once. Select all matching issues and apply fixes in bulk.'
                },
                {
                    icon: '⚡',
                    title: 'High Performance',
                    description: 'Scans 1,000 objects in under 1 second with minimal memory footprint. No dependencies required.'
                }
            ],
            sections: [
                {
                    title: 'How It Works',
                    type: 'steps',
                    items: [
                        {
                            number: '1️⃣',
                            title: 'Open Scene',
                            description: 'Auto-starts scanning'
                        },
                        {
                            number: '2️⃣',
                            title: 'See Problems',
                            description: '⚠️ icons appear in hierarchy'
                        },
                        {
                            number: '3️⃣',
                            title: 'Click Fix',
                            description: 'Review smart suggestions'
                        },
                        {
                            number: '4️⃣',
                            title: 'Apply',
                            description: 'One-click with undo support'
                        }
                    ]
                },
                {
                    title: 'Key Features',
                    type: 'list',
                    items: [
                        'Real-time automatic detection of missing references',
                        'Visual hierarchy integration with warning icons',
                        'Smart fix suggestions with confidence scores',
                        'Missing script detective with GUID tracking',
                        'Advanced search filters (missing:, component:, severity:)',
                        'Batch operations for multiple objects',
                        'Export reports in Markdown, Plain Text, and CSV',
                        'Context menu integration',
                        'Customizable settings panel',
                        'Full undo support',
                        'Comprehensive documentation'
                    ]
                },
                {
                    title: 'Report Formats',
                    type: 'grid',
                    items: [
                        {
                            title: '📄 Markdown',
                            description: 'Perfect for documentation and GitHub issues'
                        },
                        {
                            title: '📝 Plain Text',
                            description: 'Simple format for logs and quick review'
                        },
                        {
                            title: '📊 CSV',
                            description: 'Import to spreadsheets for analysis'
                        }
                    ]
                },
                {
                    title: 'What\'s Included',
                    type: 'list',
                    items: [
                        'Complete detection engine with real-time scanning',
                        'Smart fix suggestion system',
                        'Missing script detective tool',
                        'Batch operation support',
                        'Advanced search and filtering',
                        'Report generator (3 formats)',
                        'Hierarchy visual integration',
                        'Context menu extensions',
                        'Full source code',
                        'Comprehensive documentation'
                    ]
                },
                {
                    title: 'Technical Details',
                    type: 'list',
                    items: [
                        'Unity Version: 2020.3 or higher',
                        'Platform: Editor only',
                        'Performance: 1,000 objects scanned in <1 second',
                        'Memory: <10MB footprint',
                        'Dependencies: None',
                        'Integration: Zero setup required'
                    ]
                }
            ],
            cta: {
                title: 'Stop wasting time hunting for broken references',
                subtitle: 'One-time purchase. Unlimited projects. Lifetime updates.'
            }
        }
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
