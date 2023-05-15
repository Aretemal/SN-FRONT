export interface IMessageItem {
    id: string,
    type: string,
    attributes: {
        message: string,
        senderId: string,
    }
}
export interface IDialogItem {
    id: string,
    type: string,
    attributes: {
        name: string,
    }
}
export interface IDialog {
    messages: IMessageItem[],
    dialogs: IDialogItem[],
    activeId: string,
}
export interface IGetAllMessages{
    token: string,
    id: string,
    socket: any,
}

export interface ISendMessage{
    token: string,
    id: string,
    message: string,
    socket: any,
}
