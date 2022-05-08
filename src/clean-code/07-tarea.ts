;(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio'

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  interface InputEvents {
    setFocus: Function
    getValue: Function
    isActive: Function
    removeValue: Function
  }

  interface InputElementProperties
    extends HtmlElement,
      InputAttributes,
      InputEvents {}

  //? Idea para la nueva clase InputElement
  class InputElement implements InputAttributes, InputEvents {
    public id: string
    public placeholder: string
    public value: string
    public type: HtmlType
    constructor(value: string, placeholder: string, id: string) {
      const inputAttrs = new InputAttributes(value, placeholder)
      this.placeholder = inputAttrs.placeholder
      this.value = inputAttrs.value
      const htmlAttrs = new HtmlElement(id, 'input')
      this.id = htmlAttrs.id
      this.type = htmlAttrs.type
    }

    setFocus(): void {
      console.log('setFocus')
    }
    getValue(): void {
      console.log('getValue')
    }
    isActive(): void {
      console.log('isActive')
    }
    removeValue(): void {
      console.log('removeValue')
    }
  }
  // const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName')
  // This should return exactly the same as before with the same input
  const nameField = new InputElement('Fernando', 'Enter first name', 'txtName')
  nameField.setFocus()
  console.log({ nameField })
})()
