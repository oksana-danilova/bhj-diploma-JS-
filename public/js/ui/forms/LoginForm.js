/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    try {
      const response = User.login(data);
      if (response && response.error) {
        throw new Error(response.error);
      }
      App.setState('user-logged');
      this.element.reset();
      this.element.closest('.modal').style.display = 'none';
    } catch (error) {
      console.error('Ошибка при авторизации:', error.message);
    }
  }
}