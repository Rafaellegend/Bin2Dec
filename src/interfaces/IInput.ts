export interface IInput {
  type: string
  styleclass: string 
  placeholder: string | null
  value: string | null
  disabled: boolean
  onClick: () => {}
}