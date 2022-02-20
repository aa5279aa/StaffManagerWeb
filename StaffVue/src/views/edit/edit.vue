<!-- 扫码登录 -->
<template>
  <div class="login-view">
    <div class="login-form">
      <p>
        <b>员工{{ accountInfo.accountId != undefined ? '修改' : '新增' }}</b>
      </p>
      <p v-show="accountInfo.accountId != undefined">编号: {{ accountInfo.accountId }}</p>
      <p><label>工号：</label><input type="text" v-model="accountInfo.jobId" /></p>
      <p><label>姓名：</label><input type="text" v-model="accountInfo.account" /></p>
      <p><label>入职日期：</label><input type="text" v-model="accountInfo.entryDate" /></p>
      <p><label>部门：</label><input type="text" v-model="accountInfo.department" /></p>
      <p><label>职位：</label><input type="text" v-model="accountInfo.position" /></p>
      <p><label>简介：</label><input type="text" v-model="accountInfo.describes" /></p>
      <p><label>备注：</label> <input type="text" v-model="accountInfo.remark" /></p>

      <el-form ref="form" label-position="left" :model="form" class="el-form">
        <el-form-item label="上传文件:" prop="excelFile">
          <el-upload
            class="el-upload"
            ref="upload"
            :action="this.SERVE_URL + 'upload_img'"
            name="excelFile"
            drag
            :data="upData"
            :on-change="onUploadChange"
            :file-list="fileList"
            :on-error="uploadFalse"
            :on-success="uploadSuccess"
            :auto-upload="false"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <!-- <el-button slot="trigger" size="small" >选取文件</el-button> -->
          </el-upload>
        </el-form-item>
      </el-form>
      <div class="button-view">
        <!-- <p>头像: <input type="file" id="files" ref="refFile" multiple="multiple" v-on:change="fileLoad" /></p> -->
        <button @click="submitUpload">提交</button>
        <button @click="closePage">关闭</button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  components: {},
  props: {},
  data() {
    return {
      baseUrl: this.SERVE_URL + 'upload_img',
      isJump: false,
      accountInfo: {},
      imageUrl: '',
      imageFile: {},
      form: {
        fileName: '',
        coordinateType: 'BD09'
      },
      fileList: []
    }
  },
  computed: {
    upData: function () {
      return this.form
    }
  },
  created() {
    var accountInfo = this.$route.params
    this.accountInfo = accountInfo
  },

  mounted() {},
  methods: {
    onUploadChange(file) {
      this.fileList.push(file)
    },
    //文件上传成功触发
    uploadSuccess(response) {
      debugger
      console.log(response)
      if (response.data.status == 200) {
        // this.$message({
        //   message: '导入成功',
        //   type: 'success'
        // })
        this.requestRegister(response.data.imgUrl)
      } else {
        this.$message({
          message: '导入失败',
          type: 'error'
        })
      }
    },
    //文件上传失败触发
    uploadFalse() {
      debugger
      this.$message({
        message: '文件上传失败！',
        type: 'error'
      })
    },

    //表单取消
    onCancel() {
      this.$refs.form.resetFields()
    },
    requestRegister(imgUrl) {
      debugger
      this.accountInfo.imgUrl = imgUrl
      const params = {
        accountInfo: JSON.stringify(this.accountInfo)
      }
      console.log('account:' + JSON.stringify(params))
      //请求登录
      var that = this
      this.$apis.user
        .requestSet(params)
        .then(data => {
          debugger
          console.log(data.message)
          this.$message({
            message: data.message
          })
          setTimeout(() => {
            that.$router.go(-1)
          }, 1000)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.showLoading = false
        })
    },
    //表单提交
    submitUpload() {
      debugger
      if (this.fileList.length == 0) {
        this.requestRegister('')
        return
      }
      this.$refs.form.validate(valid => {
        debugger
        if (valid) {
          //触发组件的action
          this.$refs.upload.submit() //主要是这里
        }
      })
    },
    closePage() {
      this.$router.go(-1)
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
    display: flex;
    flex-direction: row;
    justify-content: left;
    label {
      width: 100px;
      text-align: right;
    }
    input {
      width: 400px;
    }
    b {
      width: 100%;
    }
  }
  .el-form {
    padding-left: 30px;
    margin-top: 10px;
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
.button-view {
  display: flex;
  flex-direction: row;
  padding-left: 20%;
  padding-right: 20%;
  width: 100%;
  align-content: flex-start;
  justify-content: space-between;
  align-items: flex-start;
  button {
    font-size: 15px;
    padding: 10px 30px 10px 30px;
  }
}
</style>
