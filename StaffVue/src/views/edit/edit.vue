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

      <el-form
        ref="form"
        label-position="left"
        :model="form"
        label-width="80px"
        style="margin: 20px; width: 60%; min-width: 600px"
      >
        <el-form-item label="上传文件" prop="excelFile">
          <el-upload
            class="upload-demo"
            ref="upload"
            :action="this.SERVE_URL + 'upload_img'"
            name="excelFile"
            drag
            :data="upData"
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

        <!-- <el-form-item>
          <el-button type="primary" @click="submitUpload(form)">导入</el-button>
         
        </el-form-item> -->
      </el-form>

      <!-- <p>头像: <input type="file" id="files" ref="refFile" multiple="multiple" v-on:change="fileLoad" /></p> -->
      <button @click="submitUpload">提交</button>
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
      baseUrl: this.HTTPURL + 'upload_img',
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
    // debugger
    var accountInfo = this.$route.params
    this.accountInfo = accountInfo
  },

  mounted() {},
  methods: {
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
      var that = this;
      this.$apis.user
        .requestSet(params)
        .then(data => {
          debugger
          console.log(data.message)
          this.$message({
            message: data.message
          })
          setTimeout(()=> {
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
      if(this.fileList.length==0){
          this.requestRegister("")
          return;
      }
      this.$refs.form.validate(valid => {
        debugger
        if (valid) {
          //触发组件的action
          this.$refs.upload.submit() //主要是这里
        }
      })
    },
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