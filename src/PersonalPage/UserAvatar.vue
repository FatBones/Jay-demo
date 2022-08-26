<template>
  <div class="headPic">
    <img :src="userPic" @click="editCropper()" title="点击上传头像" class="headImg" ref="headImg" />
    <el-dialog :visible.sync="open" width="400px" :close-on-click-modal="false" append-to-body>
      <el-row>
        <el-col :xs="24" :style="{height: '300px'}">
          <vue-cropper
            ref="cropper"
            :img="userPic"
            :info="true"
            :autoCrop="options.autoCrop"
            :autoCropWidth="options.autoCropWidth"
            :autoCropHeight="options.autoCropHeight"
            :fixedBox="options.fixedBox"
          />
        </el-col>
        
      </el-row>
      <br />
      <el-row>
        <el-col :lg="2" :md="2">
          <el-upload action="#" :http-request="requestUpload" :show-file-list="false" :before-upload="beforeUpload">
            <el-button size="small">
              上传
              <i class="el-icon-upload el-icon--right"></i>
            </el-button>
          </el-upload>
        </el-col>
       
        <el-col :lg="{span: 2, offset: 6}" :md="2">
          <el-button type="primary" size="small" @click="uploadImg()">提 交</el-button>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import { VueCropper } from "vue-cropper";
import { person, updateUserPic } from '../api/index'
import { Message } from 'element-ui';
export default {
  components: { VueCropper },
  data() {
    return {
      // 是否显示弹出层
      open: false,
      // 弹出层标题
      options: {
        autoCrop: true, // 是否默认生成截图框
        autoCropWidth: 200, // 默认生成截图框宽度
        autoCropHeight: 200, // 默认生成截图框高度
        fixedBox: true // 固定截图框大小 不允许改变
      },
      userPic: ''
    };
  },
  created(){
    this.getPersonMes()
  },
  methods: {
    async getPersonMes(){
      let result = await person()
      if(result.data.user_pic){
        // this.userPic = result.data.user_pic
        this.userPic = result.data.user_pic
      }
    },
    // 编辑头像
    editCropper() {
      this.open = true;
    },
    // 覆盖默认的上传行为
    requestUpload() {
    },
    // 上传预处理
    beforeUpload(file) {
      if (file.type.indexOf("image/") == -1) {
        Message.warning("文件格式错误，请上传图片类型,如：JPG，PNG后缀的文件。");
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.userPic = reader.result;
        };
      }
    },
    // 上传图片
    async uploadImg() {
        // this.$refs.cropper.getCropBlob(async () => {
            let params = new URLSearchParams();
            params.append("userPic", this.userPic);
            let result = await updateUserPic(params)
            if (result.statusbar === 0) {
                this.open = false;
                Message.success({
                    message: "修改成功",
                    center: true
                });
            
            }
        //     this.$refs.cropper.clearCrop();
        // });
    },
    // 实时预览
  }
};
</script>

<style scoped>
.headPic{
    height: 100px;
    width: 100px;
    border-radius: 50px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    cursor: pointer
}
.headPic:hover{
  opacity: 0.7;
}
.headImg{   
    height: inherit;
    width: inherit;
    border-radius: 50px;  
}
</style>