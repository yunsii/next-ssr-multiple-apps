declare interface IAppRewriteConfig {
  /** /src/pages 下的路由定义，形如 `/ssr1` */
  page: string;
  /** 应用域名 / host */
  host: string;
  /**
   * 扩展应用重定向，由于自动推导禁用的路由目前来看较为困难，故
   * 需要手动配置 disable 配置对应的禁用路由
   */
  rewrites?: {
    source: string;
    destination: string;
    disable: string;
  }[];
}
