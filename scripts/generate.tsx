import ReactDOMServer from 'react-dom/server';
import { argv } from 'process';
import path from 'path';
import fs from 'fs';

const genHtml = async (filePath: string) => {
    try {
        const { default: Component } = await import(filePath);

        return ReactDOMServer.renderToString(<Component />);
    } catch (error) {
        console.error(`Ошибка при импорте или рендеринге компонента: ${error}`);
        return null;
    }
};

const exportHtml = (html: string, fileName: string) => {
    try {
        // Определяем путь для файла, где будет сохранен HTML
        const outputPath = path.join(process.cwd(), 'output', `${fileName}.html`);

        // Создаем директорию 'output', если она не существует
        if (!fs.existsSync(path.dirname(outputPath))) {
            fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        }

        // Записываем HTML в файл
        fs.writeFileSync(outputPath, html, 'utf8');
        console.log(`HTML успешно сохранен в ${outputPath}`);
    } catch (error) {
        console.error(`Ошибка при сохранении HTML: ${error}`);
    }
}

const processFiles = async () => {
    const [,, ...args] = argv;
    for (const fileName of args) {
        const filePath = path.resolve(process.cwd(), 'src', `${fileName}.tsx`);

        const html = await genHtml(filePath);
        html && exportHtml(html, fileName);
    }
};
processFiles();