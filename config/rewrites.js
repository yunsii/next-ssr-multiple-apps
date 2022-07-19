/**
 * 指定 page 下的路由作为应用 host 下的路由
 *
 * @type {IAppRewriteConfig[]}
 */
const apps = [
  {
    page: '/ssr1',
    host: '(dev.|test123.|)next-ssr1.com',
    rewrites: [
      {
        // 变量名限制 [A-Za-z0-9_]
        // ref: https://github.com/pillarjs/path-to-regexp#named-parameters
        source: '/flat/:state_cities(new-york-cities|california-cities|alaska-cities-cities)',
        destination: `/flat/state-cities/:state_cities`,
        disable: '/flat/state-cities',
      },
      {
        source: '/flat/:state(new-york|california|alaska)',
        destination: `/flat/state/:state`,
        disable: '/flat/state',
      },
      {
        source: '/flat/:city*',
        destination: `/flat/city/:city*`,
        disable: '/flat/city',
      },
    ],
  },
  {
    page: '/ssr2',
    host: '(dev.|test123.|)next-ssr2.com',
  },
];

/** @type {import('next').NextConfig['rewrites']} */
const rewrites = () => {
  const beforeFiles = [
    // 排序靠前的优先级更高
    ...apps
      .filter((appItem) => !!appItem.rewrites)
      .map((appItem) => {
        return appItem.rewrites.map((appRewriteItem) => {
          return {
            source: `${appItem.page}${appRewriteItem.disable}`,
            destination: '/404',
          };
        });
      })
      .flat(),
    ...apps.map((appItem) => {
      return {
        source: `${appItem.page}/:path*`,
        destination: '/404',
      };
    }),
  ];

  const afterFiles = [
    // 排序靠前的优先级更高
    ...apps
      .filter((appItem) => !!appItem.rewrites)
      .map((appItem) => {
        return appItem.rewrites.map((appRewriteItem) => {
          return {
            source: appRewriteItem.source,
            has: [
              {
                type: 'host',
                value: appItem.host,
              },
            ],
            destination: `${appItem.page}${appRewriteItem.destination}`,
          };
        });
      })
      .flat(),
    ...apps.map((appItem) => {
      return {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: appItem.host,
          },
        ],
        destination: `${appItem.page}/:path*`,
      };
    }),
    // ...apps.map((appItem) => {
    //   return {
    //     source: '/:path((?!_next\\/).*)',
    //     has: [
    //       {
    //         type: 'host',
    //         value: appItem.host,
    //       },
    //     ],
    //     destination: `${appItem.page}/:path`,
    //   };
    // }),
  ];
  console.log('🚀 ~ file: rewrites.js ~ line 57 ~ rewrites ~ afterFiles', JSON.stringify(afterFiles, null, 2));

  return {
    beforeFiles,
    afterFiles,
  };
};

module.exports = rewrites;
