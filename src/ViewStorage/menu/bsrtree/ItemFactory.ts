import {MenuItem, CreateItem} from "bsr-tree-virtual";


export function GetSimpleCollection(count: number, icon?: any) {

let index=0
    let List: Array<MenuItem> = [];
    for (let i = 0; i < count; i++) {
        index+=1
        const root = CreateItem({content: "root : " + i, style: {color: "green",fontWeight:"bold"},icon: icon});

        for (let j = 0; j < count; j++) {
            index+=1
            const subRoot = CreateItem({content: `item:${i} ${j}`,icon: icon});

            for (let k = 0; k < count; k++) {
                index+=1
                const subRoot1 = CreateItem({content: `item:${i} ${j} ${k}`, icon:icon})

                for (let l = 0; l < count; l++) {
                    index+=1
                    const subRoot2 = CreateItem({content: `item:${i} ${j} ${k} ${l}`,icon:icon});
                    for (let m = 0; m < count; m++) {
                        const subRoot3 = CreateItem({content: `item:${i} ${j} ${k} ${l} ${m}`, style: {color: "red"},icon:icon,accessKey:"44"});
                        subRoot2.items?.push(subRoot3)
                    }

                    subRoot1.items?.push(subRoot2)
                }

                subRoot.items?.push(subRoot1)
            }
            root.items!.push(subRoot);
        }
        List.push(root)
    }

    return List
}
