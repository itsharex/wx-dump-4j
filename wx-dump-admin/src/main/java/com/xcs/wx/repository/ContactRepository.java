package com.xcs.wx.repository;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.xcs.wx.domain.dto.ContactDTO;
import com.xcs.wx.domain.vo.ContactVO;
import com.xcs.wx.domain.vo.ExportContactVO;

import java.util.List;
import java.util.Map;

/**
 * 联系人 Repository
 *
 * @author xcs
 * @date 2023年12月22日 14时20分
 **/
public interface ContactRepository {

    /**
     * 查询联系人
     *
     * @param contactDTO 查询条件
     * @return ContactVO
     */
    Page<ContactVO> queryContact(ContactDTO contactDTO);

    /**
     * 获取联系人名称
     *
     * @param userName 用户名
     * @return 昵称
     */
    String getContactNickname(String userName);

    /**
     * 获取联系人名称
     *
     * @param userNames 用户名
     * @return 昵称
     */
    Map<String, String> getContactNickname(List<String> userNames);

    /**
     * 统计联系人数量
     *
     * @return 联系人数量
     */
    int countContact();

    /**
     * 导出联系人
     *
     * @return ExportContactVO
     */
    List<ExportContactVO> exportContact();
}
