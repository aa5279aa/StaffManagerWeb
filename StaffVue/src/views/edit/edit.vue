<!-- 扫码登录 -->
<template>
  <div class="login-view">
    <div class="login-form">
      <p>
        <b>员工{{ accountInfo.accountId != undefined ? '修改' : '新增' }}</b>
      </p>
      <p v-show="accountInfo.accountId != undefined">编号: {{ accountInfo.accountId }}</p>
      <p>工号: <input type="text" v-model="accountInfo.jobId" /></p>
      <p>账户名: <input type="text" v-model="accountInfo.account" /></p>
      <p>入职日期: <input type="text" v-model="accountInfo.entryDate" /></p>
      <p>职位：<input type="text" v-model="accountInfo.position" /></p>
      <p>简介: <input type="text" v-model="accountInfo.describes" /></p>
      <p>备注: <input type="text" v-model="accountInfo.remark" /></p>
      <el-upload
        class="avatar-uploader"
        action="http://localhost:8080/staff/upload_img"
        accept="image/jpeg,image/gif,image/png"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>

      <!-- <p>头像: <input type="file" id="files" ref="refFile" multiple="multiple" v-on:change="fileLoad" /></p> -->
      <button @click="uploadFile">提交</button>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  components: {},
  props: {},
  data() {
    console.log('data')
    return {
      isJump: false,
      accountInfo: {},
      imageUrl: ''
    }
  },
  computed: {},
  created() {
    // debugger
    var accountInfo = this.$route.params
    this.accountInfo = accountInfo
  },

  mounted() {},
  methods: {
    handleAvatarSuccess(res, file) {
      console.log("");
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isFit = (file.type === 'image/jpeg' || file.type === 'image/png')
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isFit) {
        this.$message.error('上传头像图片只能是 JPG或Png 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isFit && isLt2M
    },
    requestRegister() {
      debugger

      const params = {
        accountInfo: JSON.stringify(this.accountInfo)
      }
      console.log('account:' + JSON.stringify(params))
      //请求登录

      this.$apis.user
        .requestSet(params)
        .then(data => {
          debugger
          console.log(data)
          alert(data.result)
          this.$router.go(-1)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.showLoading = false
        })
    },
    fileLoad() {
      console.log('fileLoad')
      const selectedFile = this.$refs.refFile.files[0]
      var name = selectedFile.name //选中文件的文件名
      var size = selectedFile.size //选中文件的大小
      this.$refs.refFile.value = null
      this.imgPath = selectedFile
      console.log('name:' + name + ',size:' + size)
    },
    uploadFile() {
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: this.token
        }
      }
      var formData = new FormData()
      formData.append('num', 1)
      // formData.append('linkId', this.addId)
      formData.append('rfilename', this.imgPath.name)
      formData.append('fileUpload', this.imgPath)
      this.axios.post('http://localhost:8080/staff/upload_img', formData, config).then(response => {
        if (response.data.info == 'success') {
          this.$message({
            type: 'success',
            message: '附件上传成功!'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-view {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: center;
  // background-color: rgb(51, 51, 51);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
}
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: left;
  justify-items: left;
  width: 50%;
  border: 1px solid #000;
  padding: 50px;
  p {
    width: 60%;
    margin-left: 20%;

    display: flex;
    flex-direction: row;
    justify-content: left;
    b {
      width: 100%;
    }
  }
  button {
    width: 40%;
    height: 30px;
    margin-left: 30%;
  }
  .avatar-uploader el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>