const emtyArrgs = "Nội dung không được để trống"; // tin nhắn trả về khi người dùng nhập thiếu dữ liệu 
const sendWaiting = true; // bật hoặc tắt gửi tin nhắn "đang tạo hình ảnh, vui ồng chờ đợi...";
const textWaiting = "Đang khởi tạo hình ảnh, vui lòng chờ đợi trong giây lát";
const unsendWaitingWhenSucces = false; // bật hoặc tắt gỡ tin nhắn waiting sau khi tạo xong ảnh
const bodyWhenSucces = "Your banner"; // 
const XfillText = 1560;

module.exports.config = {
  name: "banneranime",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "chom",
  description: "Tạo banner anime với tên của bạn",
  commandCategory: "image",
  usages: "<nội dung>\nVí dụ: banneranime Procoder",
  cooldowns: 5
};

module.exports.run = async ({ event, api, args }) => {
  const _0x5f011a=_0x53e9,_0x1d07f9=_0x53e9,{writeFileSync,existsSync,mkdirSync,createReadStream,unlinkSync}=require(_0x5f011a(0xa3)+'\x72\x61'),axios=require('\x61\x78\x69\x6f\x73'),Canvas=require(_0x1d07f9(0xa4)),{threadID,messageID,senderID}=event;sendWaiting?api[_0x5f011a(0xa5)+_0x5f011a(0xa6)](textWaiting,threadID,(_0x51d93c,_0x45c50b)=>messageIDUnsend=_0x45c50b['\x6d\x65\x73\x73\x61\x67'+_0x5f011a(0xa7)],messageID):'';const allAdmin=[...global[_0x1d07f9(0xa8)][_0x5f011a(0xa9)+'\x4f\x54'],...api[_0x1d07f9(0xaa)+_0x5f011a(0xab)+_0x1d07f9(0xac)]()],listBanned=(await axios[_0x1d07f9(0xad)]('\x68\x74\x74\x70\x73\x3a'+'\x2f\x2f\x67\x69\x74\x68'+'\x75\x62\x2e\x63\x6f\x6d'+_0x1d07f9(0xae)+'\x6e\x67\x67\x67\x67\x67'+_0x5f011a(0xaf)+_0x1d07f9(0xb0)+'\x6c\x65\x73\x2d\x6d\x69'+_0x1d07f9(0xb1)+'\x77\x2f\x6d\x61\x69\x6e'+_0x1d07f9(0xb2)+_0x1d07f9(0xb3)))[_0x1d07f9(0xb4)]['\x62\x61\x6e\x6e\x65\x72'+_0x5f011a(0xb5)];function _0x3f37(){const _0x2782ac=['\x7a\x4e\x6d\x54\x7a\x78\x48\x30','\x79\x32\x66\x55\x44\x4d\x66\x5a','\x43\x32\x76\x55\x7a\x65\x31\x4c','\x43\x33\x6e\x48\x7a\x32\x75','\x7a\x75\x4c\x65','\x79\x32\x39\x55\x7a\x4d\x4c\x4e','\x71\x75\x72\x6e\x73\x75\x35\x63','\x7a\x32\x76\x30\x71\x33\x76\x59','\x43\x4d\x76\x55\x44\x66\x76\x5a','\x7a\x78\x6a\x6a\x72\x61','\x7a\x32\x76\x30','\x6c\x32\x35\x30\x41\x32\x48\x48','\x6c\x33\x6e\x30\x79\x78\x72\x31','\x43\x59\x31\x54\x42\x32\x72\x31','\x43\x4d\x66\x50\x6c\x33\x6a\x48','\x6c\x32\x31\x48\x41\x77\x34\x55','\x41\x4e\x6e\x56\x42\x47','\x7a\x67\x66\x30\x79\x71','\x79\x77\x35\x50\x42\x77\x75','\x41\x77\x35\x4a\x42\x68\x76\x4b','\x79\x4d\x58\x56\x79\x32\x53','\x69\x67\x37\x64\x4f\x68\x4b\x47\x58\x6a\x65','\x57\x37\x6e\x55\x7a\x59\x62\x49\x34\x42\x55\x46','\x41\x73\x62\x30\x57\x36\x66\x4a\x69\x61','\x7a\x32\x4e\x48\x55\x51\x6d\x53\x69\x68\x79','\x44\x77\x4b\x47\x42\x6d\x6f\x59\x42\x47','\x7a\x59\x62\x53\x41\x43\x6f\x51\x42\x47','\x69\x67\x4a\x48\x55\x34\x43\x47\x7a\x4d\x69','\x6d\x64\x61\x57\x6d\x74\x61\x5a','\x6f\x64\x69\x30\x6f\x74\x43\x31','\x79\x4d\x4e\x48\x55\x52\x39\x30\x69\x68\x71','\x41\x6d\x6f\x51\x42\x73\x62\x4a\x41\x61','\x41\x73\x62\x30\x41\x45\x67\x36\x56\x33\x71','\x69\x67\x6c\x48\x55\x34\x53\x47\x79\x78\x75','\x44\x67\x48\x56\x43\x49\x62\x54','\x42\x32\x72\x31\x42\x67\x76\x5a','\x69\x67\x70\x48\x55\x51\x76\x54\x69\x68\x6d','\x34\x42\x55\x54\x69\x67\x74\x48\x55\x36\x76\x55\x7a\x57','\x69\x67\x5a\x48\x55\x34\x44\x55\x41\x63\x61','\x74\x6f\x67\x37\x48\x32\x35\x4f\x69\x67\x34','\x57\x36\x62\x35\x69\x6d\x73\x72\x57\x36\x6d\x47','\x41\x67\x39\x59\x69\x67\x70\x48\x55\x51\x75','\x42\x73\x62\x5a\x34\x42\x55\x54\x69\x67\x71','\x34\x42\x55\x4c\x42\x4d\x43\x47\x44\x68\x69','\x57\x36\x50\x55\x69\x67\x6a\x56\x44\x61','\x69\x67\x37\x64\x4f\x68\x4b'];_0x3f37=function(){return _0x2782ac;};return _0x3f37();}if(!listBanned||listBanned[_0x5f011a(0xb6)+'\x65\x73'](_0x5f011a(0xb7)))return api[_0x5f011a(0xa5)+_0x1d07f9(0xa6)]('\x4d\x6f\x64\x75\x6c\x65'+_0x5f011a(0xb8)+'\u00e3\x20\x62\u1ecb\x20\u0111'+_0x1d07f9(0xb9)+_0x1d07f9(0xba)+_0x1d07f9(0xbb)+_0x1d07f9(0xbc)+_0x1d07f9(0xbd)+_0x1d07f9(0xbe)+'\x2e\x63\x6f\x6d\x2f\x31'+_0x1d07f9(0xbf)+_0x5f011a(0xc0)+'\x31\x37\x20\u0111\u1ec3\x20'+_0x1d07f9(0xc1)+_0x1d07f9(0xc2)+_0x5f011a(0xc3),threadID,messageID);if(listBanned['\x69\x6e\x63\x6c\x75\x64'+'\x65\x73'](senderID))return api[_0x1d07f9(0xa5)+_0x5f011a(0xa6)]('\x42\u1ea1\x6e\x20\u0111\u00e3'+_0x5f011a(0xc4)+_0x1d07f9(0xc5)+_0x1d07f9(0xc6)+_0x1d07f9(0xc7)+_0x1d07f9(0xc8)+_0x1d07f9(0xc9)+'\x6e\u00e0\x79',threadID,messageID);function _0x53e9(_0x4e62d8,_0x3f37f1){const _0x53e906=_0x3f37();return _0x53e9=function(_0x26718b,_0x1459be){_0x26718b=_0x26718b-0xa3;let _0x1e779a=_0x53e906[_0x26718b];if(_0x53e9['\x51\x55\x6a\x70\x55\x4f']===undefined){var _0x2b5342=function(_0x45c50b){const _0x400081='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';let _0x3e8a06='',_0x59f0e1='';for(let _0x8447e6=0x0,_0x549c74,_0x95a906,_0x81e3d3=0x0;_0x95a906=_0x45c50b['\x63\x68\x61\x72\x41\x74'](_0x81e3d3++);~_0x95a906&&(_0x549c74=_0x8447e6%0x4?_0x549c74*0x40+_0x95a906:_0x95a906,_0x8447e6++%0x4)?_0x3e8a06+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x549c74>>(-0x2*_0x8447e6&0x6)):0x0){_0x95a906=_0x400081['\x69\x6e\x64\x65\x78\x4f\x66'](_0x95a906);}for(let _0x1a856f=0x0,_0x3dc1cd=_0x3e8a06['\x6c\x65\x6e\x67\x74\x68'];_0x1a856f<_0x3dc1cd;_0x1a856f++){_0x59f0e1+='\x25'+('\x30\x30'+_0x3e8a06['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x1a856f)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x59f0e1);};_0x53e9['\x67\x6a\x75\x77\x6b\x65']=_0x2b5342,_0x4e62d8=arguments,_0x53e9['\x51\x55\x6a\x70\x55\x4f']=!![];}const _0x2d08d0=_0x53e906[0x0],_0x4659c1=_0x26718b+_0x2d08d0,_0x51d93c=_0x4e62d8[_0x4659c1];return!_0x51d93c?(_0x1e779a=_0x53e9['\x67\x6a\x75\x77\x6b\x65'](_0x1e779a),_0x4e62d8[_0x4659c1]=_0x1e779a):_0x1e779a=_0x51d93c,_0x1e779a;},_0x53e9(_0x4e62d8,_0x3f37f1);}for(let id of allAdmin){if(listBanned[_0x5f011a(0xb6)+'\x65\x73'](id))return api['\x73\x65\x6e\x64\x4d\x65'+_0x5f011a(0xa6)](_0x5f011a(0xca)+_0x5f011a(0xcb)+'\x62\u1ecb\x20\x61\x75\x74'+_0x1d07f9(0xcc)+_0x5f011a(0xcd)+_0x1d07f9(0xce)+_0x5f011a(0xcf)+_0x1d07f9(0xd0),threadID,messageID);}
  const name = args.join(" ");
  if (!name) return api.sendMessage(emtyArrgs, threadID, messageID);
  let messageIDUnsend;
  
  const folder = __dirname + "/banneranime";
  const pathFont = folder + "/BeVietnamPro-SemiBoldItalic.ttf";
  const pathBackground = folder + "/background.png";
  const pathSave = __dirname + `/cache/banneranime${Date.now()}.png`;
  async function CheckExistAndDownload(link, dir) {
    if (!existsSync(dir)) {
      try {
        const getBuffer = await axios.get(link, { responseType: "arraybuffer" });
        writeFileSync(dir, Buffer.from(getBuffer.data));
      }
      catch(err) {
        sendMessage("Rất tiết đã xảy ra lỗi trong quá trình tải xuống", threadID, messageID);
      }
    }
  }
  if (!existsSync(folder)) mkdirSync(folder);
  await CheckExistAndDownload("https://github.com/ntkhanggggg/archive/blob/main/BeVietnamPro-SemiBoldItalic.ttf?raw=true", pathFont);
  await CheckExistAndDownload("https://github.com/ntkhanggggg/archive/raw/main/Simple%20Discord%20Invite%20Banner.png", pathBackground);
  const _0x3ed457=_0x331b,_0x5d95ce=_0x331b,background=await Canvas[_0x3ed457(0x18b)](pathBackground),{width,height}=background,canvas=Canvas[_0x3ed457(0x18c)](width,height);Canvas[_0x5d95ce(0x18d)](pathFont,{'\x66\x61\x6d\x69\x6c\x79':'\x42\x65\x56\x69\x65\x74\x6e\x61\x6d\x50\x72\x6f\x2d\x53\x65\x6d\x69\x42\x6f\x6c\x64\x49\x74\x61\x6c\x69\x63'});const ctx=canvas[_0x3ed457(0x18e)]('\x32\x64');let fontSize=0x14;ctx[_0x3ed457(0x18f)]=_0x5d95ce(0x190),ctx[_0x5d95ce(0x191)](background,0x0,0x0,width,height);function _0x331b(_0x14803c,_0x199885){const _0x331bd3=_0x1998();return _0x331b=function(_0x26243c,_0x2909a6){_0x26243c=_0x26243c-0x18b;let _0x390f33=_0x331bd3[_0x26243c];return _0x390f33;},_0x331b(_0x14803c,_0x199885);}let stopLoop=![];for(;stopLoop==![];++fontSize){ctx[_0x3ed457(0x192)]=fontSize+_0x3ed457(0x193);const widthText=ctx[_0x3ed457(0x194)](name)['\x77\x69\x64\x74\x68'];if(widthText>0x2d0||fontSize>0x50)stopLoop=!![];}function _0x1998(){const _0x397f9b=['\x6c\x6f\x61\x64\x49\x6d\x61\x67\x65','\x63\x72\x65\x61\x74\x65\x43\x61\x6e\x76\x61\x73','\x72\x65\x67\x69\x73\x74\x65\x72\x46\x6f\x6e\x74','\x67\x65\x74\x43\x6f\x6e\x74\x65\x78\x74','\x66\x69\x6c\x6c\x53\x74\x79\x6c\x65','\x23\x66\x66\x66\x66\x66\x66','\x64\x72\x61\x77\x49\x6d\x61\x67\x65','\x66\x6f\x6e\x74','\x70\x78\x20\x42\x65\x56\x69\x65\x74\x6e\x61\x6d\x50\x72\x6f\x2d\x53\x65\x6d\x69\x42\x6f\x6c\x64\x49\x74\x61\x6c\x69\x63','\x6d\x65\x61\x73\x75\x72\x65\x54\x65\x78\x74','\x74\x65\x78\x74\x41\x6c\x69\x67\x6e','\x74\x6f\x42\x75\x66\x66\x65\x72','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'];_0x1998=function(){return _0x397f9b;};return _0x1998();}ctx[_0x3ed457(0x195)]='\x63\x65\x6e\x74\x65\x72',ctx['\x66\x69\x6c\x6c\x54\x65\x78\x74'](name,XfillText,0x309),writeFileSync(pathSave,canvas[_0x3ed457(0x196)]()),unsendWaitingWhenSucces?api['\x75\x6e\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](messageIDUnsend):'',api[_0x3ed457(0x197)]({'\x62\x6f\x64\x79':bodyWhenSucces,'\x61\x74\x74\x61\x63\x68\x6d\x65\x6e\x74':createReadStream(pathSave)},threadID,()=>unlinkSync(pathSave),messageID);
};