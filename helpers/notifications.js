import { Notifications, Permissions } from 'expo'

export const setUpNotifications = () => {

    //Cancel any previous notifications to ensure that no duplication exists
    Notifications.cancelAllScheduledNotificationsAsync()

    const localNotification = {
        title: 'Udacicards - Time to practice!',
        body: 'Hey, what did you learn today ? Open udacicards now and learn something new',
        ios: {
            sound: true,
        }
    }

    let date = new Date()
    date.setSeconds(0)
    date.setMinutes(0)
    date.setHours(8)
    date.setDate(date.getDay()+1)

    const schedulingOptions = {
        time: date,
        repeat: 'day',
    }

    //If no permissions are set, prompt the user
    Permissions.getAsync(Permissions.NOTIFICATIONS).then(({status})=>{
        if(status !== 'granted') { Permissions.askAsync(Permissions.NOTIFICATIONS) }
    })

    //Activate notifications
    Notifications.scheduleLocalNotificationAsync(
        localNotification,
        schedulingOptions
    )

}



