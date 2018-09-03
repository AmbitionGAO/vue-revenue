const validateMobile = (rule, value, callback) => {
  if (!(/^1[345789]\d{9}$/.test(value))) {
    callback(new Error('手机号不合法'));
    this.survisePhone = false;
  } else {
    callback();
  }
};

export default {
  phone: {
    validator: validateMobile,
    trigger: 'change',
    required: true,
    message: '请输入正确的手机号',
  },
  work: {
    trigger: 'change',
    required: true,
    message: '请输入职位',
  },
  linkman: {
    trigger: 'change',
    required: true,
    message: '请输入联系人',
  },
  code: {
    trigger: 'change',
    required: true,
    message: '请输入验证码',
  },
  ly: {
    required: true,
    trigger: 'change'
  },
  city: [
    { required: true, message: 'Please select the city', trigger: 'change' }
  ],
  mail: [
    { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
    { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
  ],
  name: {
    required: true,
    trigger: 'change'
  },
  qc: {
    require: true,
    trigger: 'change'
  },
  ts: {
    require: true,
    trigger: 'change'
  }
};
