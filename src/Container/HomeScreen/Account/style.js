import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        width: "100%"
    },
    screen: {
        margin: 16,
        flex: 1,
    },
    headName: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#047BD5",
        paddingBottom: 15,
        paddingTop: 15,
        justifyContent: "space-between",
        paddingLeft: 16,
        paddingRight: 16
    },
    headText: {
        color: "#ffffff",
        fontWeight: "600",
        fontSize: 16
    },
    searchIcon: {
        fontSize: 20,
    },
    mainOCard: {
        width: "48%",
        marginRight: "4%",
        marginBottom: 6,
        marginTop: 5
    },
    optionCard: {
        flexDirection: "row",
        height: 40,
        borderRadius: 5,
        borderWidth: 2,
        alignItems: "center",
        borderColor: "#9C9C9B"
    },
    oIcon: {
        paddingLeft: 8,
        paddingRight: 6,
        color: "#047BD5"
    },
    oName: {
        color: "black",
        fontWeight: "500"
    },
    border: {
        borderWidth: 3,
        borderColor: "#9C9C9B",
        marginTop: 12,
        marginBottom: 12
    },
    accText: {
        fontSize: 16,
        color: "black",
        fontWeight: "600",
        marginBottom: 8
    },
    AccCard: {
        flexDirection: "row",
        height: 40,
        alignItems: "center",
        justifyContent: "space-between"
    },
    startAccCard: {
        flexDirection: "row",
        alignItems: "center",
    },
    aoName: {
        color: "black",
        fontWeight: "400",
        paddingLeft: 10
    },
    aoIcon: {
        color: "#047BD5"
    },
    OutBtn: {
        alignItems: "center"
    },
    logOutBtn: {
        backgroundColor: "#047BD5",
        paddingBottom: 15,
        paddingTop: 15,
        paddingRight: 90,
        paddingLeft: 90,
        alignItems: "center",
        borderRadius: 10
    },
    logOutText: {
        color: "#ffffff",
        fontWeight: "600",
        fontSize: 16
    }
})
export default styles