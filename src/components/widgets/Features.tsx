import { component$ } from '@builder.io/qwik';
import { IconStar } from '~/components/icons/IconStar';

export default component$(() => {
  const items = [
    [
      {
        title: '⚡ A Simple Language',
        description:
          'Focus on debugging your application rather than debugging your programming language knowledge. No hidden control flow. No hidden memory allocations. No preprocessor, no macros.',
        icon: 'tabler:brand-tailwind',
      },
      {
        title: '⚡ Comptime',
        description:
          'A fresh approach to metaprogramming based on compile-time code execution and lazy evaluation. Call any function at compile-time. Manipulate types as values without runtime overhead. Comptime emulates the target architecture.',
        icon: 'tabler:components',
      },
      {
        title: '⚡ Maintain it with Giz',
        description:
          'Incrementally improve your C/C++/Zig/Giz codebase. Use Giz as a zero-dependency, drop-in C/C++/Zig compiler that supports cross-compilation out-of-the-box. Leverage zig build to create a consistent development environment across all platforms. Add a Zig compilation unit to C/C++ projects; cross-language LTO is enabled by default.',
        icon: 'tabler:list-check',
      },
    ],
    [
      {
        title: '⚡ Unified Monorepo Tool',
        description:
          'Compiler, Build Management, Dependency Management, Package Management, Testing, and more. Giz is a unified monorepo tool that makes it easy to manage, build, and test projects across all platforms.',
        icon: 'tabler:rocket',
      },
      {
        title: '⚡ No Dirty Oject Notation. ',
        description:
          "With Giz, you don't have to worry about the dirty object notation. No JSON / ZON for package management ",
        icon: 'tabler:arrows-right-left',
      },
      {
        title: '⚡ Open to new ideas and contributions',
        description:
          'Get rid of not just Evil Corporations, but also from Evil Organizations',
        icon: 'tabler:bulb',
      },
            {
        title: '⚡ No Excuses - compiler does the heavy lifting, not the programmer',
        description:
          'The reason of existence of compiler and build system is to make the code more reliable and maintainable,  and to make the code more terse',
        icon: 'tabler:bulb',
      },
    ],
    ],
  ];

  return (
    <section class="scroll-mt-16" id="features">
      <div class="px-4 py-16 mx-auto max-w-6xl lg:px-8 lg:py-20">
        <div class="mb-10 md:mx-auto sm:text-center md:mb-12 max-w-3xl">
          <p class="text-base text-primary-600 dark:text-purple-200 font-semibold tracking-wide uppercase">
            Features
          </p>
          <h2 class="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
            What you get with <span class="whitespace-nowrap">Giz</span>
          </h2>
          <p class="max-w-3xl mx-auto sm:text-center text-xl text-gray-600 dark:text-slate-400">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div class="grid mx-auto space-y-6 md:grid-cols-2 md:space-y-0">
          {items.map((subitems) => (
            <div class="space-y-8 sm:px-8">
              {subitems.map(({ title, description }) => (
                <div class="flex flex-row max-w-md">
                  <div class="mb-4 mr-4">
                    <div class="text-white flex items-center justify-center w-12 h-12 rounded-full bg-secondary-500 dark:bg-secondary-700">
                      <IconStar />
                    </div>
                  </div>
                  <div>
                    <h3 class="mb-3 text-xl font-bold">{title}</h3>
                    <p class="text-gray-600 dark:text-slate-400">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
