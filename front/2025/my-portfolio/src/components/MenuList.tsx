interface IMenuListProps {
    menus: any[];
}

export default function MenuList({ menus }: IMenuListProps) {
    return (
        <ul>
            {menus.map((p: any) => (
                <li key={p.id}>{p.properties.name?.title?.[0]?.plain_text ?? "(이름 없음)"} :</li>
            ))}
        </ul>
    );
}
