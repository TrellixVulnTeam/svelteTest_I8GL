import superagent from "superagent";

export default {
    string: '新闻列表',
    newsList: [],
    async requetNewsListEvent(): Promise<void> {
        try {
            const { body: reoslve } = await superagent.get("http://192.168.2.101:3000/test");
            const tempList = JSON.parse(reoslve.body).result.data;
            this.newsList = tempList.map((item: { thumbnail_pic_s02: string, title: string, date: string }) => ({ ...item, coverPath: item.thumbnail_pic_s02 }));
        } catch (err: any) {
            console.error(err);
            this.newsList = [{
                title: "暂无",
                date: "暂无",
                coverPath: null
            }];
        }
    }
}