/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.0
* @file  settings.js - QueenAmdi bot settings

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, _default_list_sections, Language } = require('../assets/scripts')
const { settingList, applyList } = _default_list_sections
const Lang = Language.getString('settings');


AMDI({ cmd: "apply", desc: Lang.setDesc, type: "profile", react: "👩🏻‍🎨" }, (async (amdiWA) => {
    let { prefix, isReply, reply, reply_message, sendListMsg  } = amdiWA.msgLayout;

    if (!isReply) return reply(Lang.needReplymsg)

    var listInfo = {}
    listInfo.title = Lang.applyTitle
    listInfo.text = Lang.applyText
    listInfo.buttonTXT = 'default'  

    const sections = await applyList(prefix, reply_message.conversation);
    return await sendListMsg(listInfo, sections);
}));


AMDI({ cmd: "settings", desc: Lang.setDesc, type: "profile", react: "⚙️" }, (async (amdiWA) => {
    let { prefix, sendListMsg } = amdiWA.msgLayout;

    var listInfo = {}
    listInfo.title = Lang.setListTitle
    listInfo.text = Lang.setListText
    listInfo.buttonTXT = 'default'  

    const sections = await settingList(prefix);
    return await sendListMsg(listInfo, sections);
}));