/// <reference types="vite/client" />

declare namespace Solid {
  interface HTMLAttrbutes<T> extends HTMLAttrbutes<T> {
    use?: any
  }
  
  interface FormHTMLAttributes<T> extends FormHTMLAttributes<T> {use?: any}
}