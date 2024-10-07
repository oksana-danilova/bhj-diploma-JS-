/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    try {
      const response = User.register(data);
      if (response && response.error) {
        throw new Error(response.error);
      }
      App.setState('user-logged');
      this.element.closest('.modal').style.display = 'none';
    } catch (error) {
      console.error('Ошибка при регистрации:', error.message);
    }
  }
}