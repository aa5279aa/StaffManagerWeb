<template>
    <el-form ref="form" label-position="left" :model="form" :rules="rules" label-width="80px"  style="margin:20px;width:60%;min-width:600px;">
        <el-form-item label="上传文件" prop="excelFile">
            <el-upload 
                class="upload-demo"
                ref="upload"
                :action="uploadUrl()"
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
        
        <el-form-item>
            <el-button type="primary" @click="submitUpload(form)">导入</el-button>
            <el-button   @click="onCancel(form)">取消</el-button>
        </el-form-item>
    </el-form>
</template>
 
 
<script>
    export default {
        data() {
            return {
                rules: {
                    coordinateType: [
                        { required: true, message: '请选择文件中的坐标类型', trigger: 'change' }
                    ],
                },
                form: {
                    fileName:'',
                    coordinateType: 'BD09',
                },
                fileList: [],
            }
        },
        computed: {
            // 这里定义上传文件时携带的参数，即表单数据
            upData: function() {
                return this.form
            }
        },
        methods: { 
            //导入接口地址
            uploadUrl: function() {
                return this.SERVE_URL+"upload_img"  //接口
            },
            //文件上传成功触发
            uploadSuccess(response) {
                debugger
                console.log(response.data)
                if(response.data.code == 0){
                    this.$message({
                        message: '导入成功',
                        type: 'success'
                    });
                }else {
                     this.$message({
                        message: '导入失败',
                        type: 'error'
                    });
                }
            },
             //文件上传失败触发
            uploadFalse() {
                 this.$message({
                        message: '文件上传失败！',
                        type: 'error'
                    });
            },
           
            //表单提交
            submitUpload() {
               this.$refs.form.validate((valid) => {
                    debugger
                    if (valid) {
                        //触发组件的action
                        this.$refs.upload.submit();  //主要是这里
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            //表单取消
            onCancel(){
                this.$refs.form.resetFields();
            }
 
 
 
        }
    }
</script>