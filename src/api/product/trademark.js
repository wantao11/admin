// 品牌管理的获取数据
// /admin/product/baseTrademark/{page}/{limit}
import request from '@/utils/request'
// 获取品牌列表接口
export const reqTradeMarkList = (page, limit) => request({ url: `/admin/product/baseTrademark/${page}/${limit}`, method: 'GET' })

// 添加品牌  修改品牌
export const reqAddOrUpdateTradeMark = (tradeMark) => {
    // 带给服务器数据携带ID---修改
    if (tradeMark.id) {
        return request({ url: `/admin/product/baseTrademark/update`, method: 'put', data: tradeMark })
    }
    else {
        // 新增
        return request({ url: `/admin/product/baseTrademark/save`, method: 'POST', data: tradeMark })
    }
}

// 删除品牌
export const reqDeleteTradeMark = (id) => request({ url: `/admin/product/baseTrademark/remove/${id}`,method: 'delete',})



