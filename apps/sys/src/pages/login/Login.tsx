import { type Component } from 'solid-js'
import { useNavigate } from '@solidjs/router'
import { createForm } from '@felte/solid'
import { validator } from '@felte/validator-zod'
import { z } from 'zod'
import { DButton, DInput } from 'dlibs'
import './style.less'

const User = z.object({
  username: z
    .string()
    .min(1, '请输入用户名')
    .min(4, '用户名不能少于4位!')
    .max(30, '用户名不能超过30位!'),
  password: z.string().min(1, '请输入密码').min(6, '密码不能少于6位!')
})

const Login: Component = () => {
  const navigate = useNavigate()
  const { form, errors } = createForm<z.infer<typeof User>>({
    extend: validator({ schema: User }),
    warn(values) {
      const warnings: any = {}
      if (values.password && values.password.length < 8) {
        warnings.password = 'Your password could be more secure'
      }
      return warnings
    },
    onSubmit(values) {
      console.log('submit:::', values)
      navigate('/')
    },
    onError(evt) {
      console.log(evt)
    }
  })
  return (
    <div class="login login_wrapper" chai-h-screen>
      <div class="login_inner flex shadow">
        <div class="section_left">
          <div class="sec">专业、效率、便捷</div>
          <div class="sec">尊重、协同、融洽</div>
        </div>
        <div class="section_right">
          <h3>欢迎登录</h3>
          <form use:form>
            <div class="row">
              <p class="ext">
                <label class="label">用户名: </label>
                <span class="err-tip">{errors()?.username?.[0]}</span>
              </p>
              <DInput.Root>
                <DInput.Input name="username" placeholder="请输入用户名" />
              </DInput.Root>
            </div>
            <div class="row">
              <p class="ext">
                <label class="label">密码: </label>
                <span class="err-tip">{errors()?.password?.[0]}</span>
              </p>
              <DInput.Root>
                <DInput.Input name="password" placeholder="请输入密码" type="password" />
              </DInput.Root>
            </div>
            <div class="footer">
              <p class="ext">
                <label>
                  <input type="checkbox" /> 记住我
                </label>
                <a href="#">忘记密码</a>
              </p>
              <DButton.Root class="btn-sub" type="primary" native-type="submit">
                登录
              </DButton.Root>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
