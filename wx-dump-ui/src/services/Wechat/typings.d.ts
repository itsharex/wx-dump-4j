// @ts-ignore
/* eslint-disable */

interface Response<T> {
  success: boolean;
  data: T;
  errorCode?: number;
  errorMessage?: string;
}

interface ContactLabelItem {
  labelId: string;
  labelName: string;
}

type ContactParams = {
  current?: number;
  pageSize?: number;
  remark?: string;
  nickName?: string;
  labelId?: string;
};

interface ContactItem {
  userName: string;
  alias: string;
  type: number;
  verifyFlag: number;
  remark: string;
  nickName: string;
  labelNameList: string;
  headImgUrl: string;
  py: string;
  labelIdList: string;
  labels: string[];
}

type ChatRoomParams = {
  current?: number;
  pageSize?: number;
  chatRoomTitle?: string;
  selfDisplayName?: string;
  createBy?: string;
};

type ChatRoomItem = {
  chatRoomName?: string;
  chatRoomTitle?: string;
  isShowName?: number;
  selfDisplayName?: string;
  createBy?: string;
  headImgUrl?: string;
  dissolution?: boolean;
  enterprise?: boolean;
};

interface ChatRoomDetail {
  chatRoomName: string;
  chatRoomTitle: string;
  selfDisplayName: string;
  createBy: string;
  headImgUrl: string;
  chatRoomInfo: ChatRoomInfo;
  members: ChatRoomMember[];
}

interface ChatRoomInfo {
  announcement: string;
  infoVersion: number;
  announcementEditor: string;
  announcementPublisher: string;
  announcementPublishTime: number;
  strAnnouncementPublishTime: string;
  chatRoomStatus: number;
}

interface ChatRoomMember {
  wxId: string;
  remark: string;
  state: number;
  headImgUrl: string;
}

type FeedsParams = {
  current?: number;
  pageSize?: number;
};

interface FeedsItem {
  feedId: number;
  strCreateTime: string;
  faultId: number;
  type: number;
  userName: string;
  nickName: string;
  status: number;
  extFlag: number;
  privFlag: number;
  stringId: string;
  contentDesc: string;
  medias: Media[];
  location: Location;
  headImgUrl: string;
}

interface Media {
  url: string;
  thumb: string;
}

interface Location {
  poiClassifyId: string;
  poiName: string;
  poiAddress: string;
  poiClassifyType: number;
  city: string;
}

interface SessionItem {
  userName: string;
  alias: string;
  nickName: string;
  status: number;
  content: string;
  msgType: number;
  msgStatus: number;
  time: number;
  strTime: string;
  shortTime: string;
  headImgUrl: string;
}

type MsgParams = {
  talker?: string;
  lastCreateTime?: number;
};

type ExportMsgParams = {
  talker?: string;
};

interface MsgItem {
  msgSvrId: string;
  localId: number;
  type: number;
  subType: number;
  isSender: number;
  createTime: number;
  strCreateTime: string;
  imgMd5: string;
  emojiUrl: string;
  strContent: string;
  avatar: string;
  referMsgContent: string;
  weAppInfo: WeAppInfo;
  cardLink: CardLink;
}

interface WeAppInfo {
  title: string;
  sourceDisplayName: string;
  weAppIconUrl: string;
  weAppPageThumbRawUrl: string;
}

interface CardLink {
  title: string;
  sourceDisplayName: string;
  des: string;
  url: string;
}

interface WeChat {
  pid: number;
  baseAddress: number;
  version: string;
  nickname: string;
  account: string;
  mobile: string;
  key: string;
  basePath: string;
  wxId: string;
}

interface MsgTypeDistributionItem {
  type: string;
  value: number;
}
interface CountRecentMsgItem {
  type: string;
  value: number;
  category: string;
}

interface TopContactsMonthlyItem {
  userName: string;
  nickName: string;
  headImgUrl: string;
  total: number;
}

interface StatsPanel {
  contact: number;
  chatRoom: number;
  sent: number;
  received: number;
}

interface RecentUsedKeyWordItem {
  text: string;
}
