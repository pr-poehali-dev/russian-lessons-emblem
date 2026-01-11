import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const CoursePage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  const courses = [
    {
      id: 1,
      title: "Орфография: безударные гласные",
      description: "Комплексный набор упражнений для отработки правописания безударных гласных в корне слова",
      grade: "5-6 класс",
      category: "Грамматика",
      lessons: [
        { id: 1, title: "Введение в орфографию", duration: "12:34", type: "video" },
        { id: 2, title: "Правило проверки безударных гласных", duration: "15:20", type: "video" },
        { id: 3, title: "Практические упражнения", duration: "18:45", type: "video" }
      ],
      notes: [
        { id: 1, title: "Конспект урока 1: Основные понятия", pages: 3 },
        { id: 2, title: "Конспект урока 2: Алгоритм проверки", pages: 5 },
        { id: 3, title: "Таблица проверяемых гласных", pages: 2 }
      ],
      schemes: [
        { id: 1, title: "Схема проверки безударной гласной", type: "Алгоритм" },
        { id: 2, title: "Типы корней с чередованием", type: "Классификация" }
      ],
      rules: [
        "Чтобы проверить безударную гласную в корне, нужно подобрать однокоренное слово или изменить форму слова так, чтобы эта гласная стала ударной",
        "В корнях -гор-/-гар-, -зор-/-зар- написание зависит от ударения",
        "Корни с чередованием не проверяются ударением"
      ],
      ogeEge: [
        { id: 1, title: "ОГЭ: Задание 5 (Орфография)", questions: 15, difficulty: "Средняя" },
        { id: 2, title: "ЕГЭ: Задание 9 (Правописание корней)", questions: 20, difficulty: "Высокая" }
      ]
    },
    {
      id: 2,
      title: "Сочинение-рассуждение: структура и аргументация",
      description: "Методические рекомендации по подготовке к написанию сочинений формата ОГЭ и ЕГЭ",
      grade: "9-11 класс",
      category: "Письмо",
      lessons: [
        { id: 1, title: "Структура сочинения-рассуждения", duration: "20:15", type: "video" },
        { id: 2, title: "Как подбирать аргументы", duration: "25:30", type: "video" },
        { id: 3, title: "Речевые клише и связки", duration: "14:50", type: "video" },
        { id: 4, title: "Разбор типичных ошибок", duration: "22:10", type: "video" }
      ],
      notes: [
        { id: 1, title: "Шаблон сочинения ОГЭ", pages: 4 },
        { id: 2, title: "Шаблон сочинения ЕГЭ", pages: 5 },
        { id: 3, title: "Банк аргументов по темам", pages: 12 }
      ],
      schemes: [
        { id: 1, title: "Композиция сочинения 9.3 (ОГЭ)", type: "Структура" },
        { id: 2, title: "Композиция сочинения 27 (ЕГЭ)", type: "Структура" },
        { id: 3, title: "Типы аргументов", type: "Классификация" }
      ],
      rules: [
        "Сочинение должно содержать тезис, аргументы и вывод",
        "В ОГЭ требуется привести 2 аргумента: из текста и из жизненного опыта",
        "В ЕГЭ необходимо прокомментировать проблему текста с двумя примерами-иллюстрациями",
        "Каждый абзац начинается с красной строки"
      ],
      ogeEge: [
        { id: 1, title: "ОГЭ: Сочинение 9.3", questions: 10, difficulty: "Высокая" },
        { id: 2, title: "ЕГЭ: Сочинение (задание 27)", questions: 8, difficulty: "Высокая" }
      ]
    },
    {
      id: 3,
      title: "Анализ поэтического текста",
      description: "Пошаговая методика анализа стихотворений: размер, рифма, тропы, образная система",
      grade: "8-11 класс",
      category: "Литература",
      lessons: [
        { id: 1, title: "Стихотворные размеры", duration: "18:20", type: "video" },
        { id: 2, title: "Рифма и строфика", duration: "16:45", type: "video" },
        { id: 3, title: "Тропы и стилистические фигуры", duration: "22:30", type: "video" },
        { id: 4, title: "Образная система стихотворения", duration: "19:55", type: "video" }
      ],
      notes: [
        { id: 1, title: "Таблица стихотворных размеров", pages: 2 },
        { id: 2, title: "Виды рифм и строф", pages: 3 },
        { id: 3, title: "Словарь литературных терминов", pages: 8 }
      ],
      schemes: [
        { id: 1, title: "Алгоритм анализа стихотворения", type: "План" },
        { id: 2, title: "Классификация тропов", type: "Схема" },
        { id: 3, title: "Типы рифмовки", type: "Таблица" }
      ],
      rules: [
        "Анализ начинается с определения темы и идеи стихотворения",
        "Стихотворный размер определяется по количеству и чередованию ударных/безударных слогов",
        "Метафора — скрытое сравнение, эпитет — образное определение",
        "В анализе важно связывать форму и содержание"
      ],
      ogeEge: [
        { id: 1, title: "ОГЭ: Анализ стихотворения", questions: 8, difficulty: "Средняя" },
        { id: 2, title: "ЕГЭ: Задания 10-14 (Поэзия)", questions: 12, difficulty: "Средняя" }
      ]
    }
  ];

  const course = courses.find(c => c.id === Number(courseId));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Курс не найден</h2>
          <Button onClick={() => navigate("/")}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  const toggleLesson = (lessonId: number) => {
    if (completedLessons.includes(lessonId)) {
      setCompletedLessons(completedLessons.filter(id => id !== lessonId));
    } else {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const progress = Math.round((completedLessons.length / course.lessons.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <Icon name="ArrowLeft" className="mr-2" size={18} />
          Назад к курсам
        </Button>

        <div className="max-w-6xl mx-auto">
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-3xl mb-3">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                  <div className="flex gap-3 mt-4">
                    <Badge variant="secondary">{course.grade}</Badge>
                    <Badge variant="outline">{course.category}</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground mb-2">Прогресс курса</div>
                  <div className="text-3xl font-bold text-primary">{progress}%</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {completedLessons.length} из {course.lessons.length}
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Tabs defaultValue="lessons" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="lessons">
                <Icon name="Play" className="mr-2" size={16} />
                Видеоуроки
              </TabsTrigger>
              <TabsTrigger value="notes">
                <Icon name="FileText" className="mr-2" size={16} />
                Конспекты
              </TabsTrigger>
              <TabsTrigger value="schemes">
                <Icon name="GitBranch" className="mr-2" size={16} />
                Схемы
              </TabsTrigger>
              <TabsTrigger value="rules">
                <Icon name="BookOpen" className="mr-2" size={16} />
                Правила
              </TabsTrigger>
              <TabsTrigger value="tests">
                <Icon name="ClipboardCheck" className="mr-2" size={16} />
                ОГЭ/ЕГЭ
              </TabsTrigger>
            </TabsList>

            <TabsContent value="lessons" className="mt-6">
              <div className="grid gap-4">
                {course.lessons.map((lesson) => {
                  const isCompleted = completedLessons.includes(lesson.id);
                  return (
                    <Card key={lesson.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isCompleted ? 'bg-green-100' : 'bg-primary/10'}`}>
                              <Icon name={isCompleted ? "CheckCircle2" : "Play"} className={isCompleted ? "text-green-600" : "text-primary"} size={24} />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1">{lesson.title}</h3>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Icon name="Clock" size={14} />
                                {lesson.duration}
                              </span>
                              <Badge variant="outline" className="text-xs">Видео</Badge>
                            </div>
                          </div>
                          <Button 
                            variant={isCompleted ? "outline" : "default"}
                            onClick={() => toggleLesson(lesson.id)}
                          >
                            {isCompleted ? (
                              <>
                                <Icon name="RotateCcw" className="mr-2" size={16} />
                                Пересмотреть
                              </>
                            ) : (
                              <>
                                <Icon name="Play" className="mr-2" size={16} />
                                Смотреть
                              </>
                            )}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="notes" className="mt-6">
              <div className="grid md:grid-cols-2 gap-4">
                {course.notes.map((note) => (
                  <Card key={note.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                          <Icon name="FileText" className="text-blue-600" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{note.title}</h3>
                          <div className="text-sm text-muted-foreground">
                            {note.pages} {note.pages === 1 ? 'страница' : note.pages < 5 ? 'страницы' : 'страниц'}
                          </div>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Icon name="Download" size={18} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="schemes" className="mt-6">
              <div className="grid md:grid-cols-2 gap-4">
                {course.schemes.map((scheme) => (
                  <Card key={scheme.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                          <Icon name="GitBranch" className="text-purple-600" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{scheme.title}</h3>
                          <Badge variant="secondary">{scheme.type}</Badge>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Icon name="ExternalLink" size={18} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="rules" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BookOpen" className="text-primary" size={24} />
                    Основные правила
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {course.rules.map((rule, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-semibold">
                          {index + 1}
                        </div>
                        <p className="text-sm leading-relaxed pt-1">{rule}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tests" className="mt-6">
              <div className="grid gap-4">
                {course.ogeEge.map((test) => (
                  <Card key={test.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                          <Icon name="ClipboardCheck" className="text-orange-600" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{test.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Icon name="HelpCircle" size={14} />
                              {test.questions} заданий
                            </span>
                            <Badge variant={test.difficulty === "Высокая" ? "destructive" : "secondary"}>
                              {test.difficulty} сложность
                            </Badge>
                          </div>
                        </div>
                        <Button>
                          <Icon name="Play" className="mr-2" size={16} />
                          Начать тест
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
