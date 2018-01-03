/**
 * Created by Administrator on 2017/7/10 0010.
 */
jQuery.validator.addMethod("isZipCode", function(value, element) {

    var tel = /^[0-9]{6}$/;

    return this.optional(element) || (tel.test(value));

}, "请正确填写您的邮政编码");      


jQuery.validator.addMethod("isIdCardNo", function(value, element) {
    return this.optional(element) || idCardNoUtil.checkIdCardNo(value);
}, "请正确输入您的身份证号码");


// 验证手机号
jQuery.validator.addMethod("isPhoneNo",function(value,element) {
    var pattern = /^1[34578]\d{9}$/;
    return this.optional(element) || (pattern.test(value));
},"请输入正确的手机号码");

/*验证汉字*/
jQuery.validator.addMethod("chcharacter", function(value, element){
    var tel = /^[\u4E00-\u9FA5]+$/;
    return this.optional(element) || (tel.test(value));
}, "请输入汉字");

/*特殊字符*/
jQuery.validator.addMethod("specialCharFilter", function(value, element) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;,.<>/?~！@#￥……&*（）——|【】‘；：”“'。，、？%+ 　\"\\\\]");
    var specialStr = "";
    for(var i=0;i<value.length;i++){
        specialStr += value.substr(i, 1).replace(pattern, '');
    }

    if( specialStr == value){
        return true;
    }
    return false;
});