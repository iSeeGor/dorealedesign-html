@forelse($products as $item)
    <div class="product-grid__col f-all @foreach($item->category as $category) {{ $category->slug }} @endforeach" >
        <div class="dd-card">

            <div class="dd-card__media">
                <img src="{{ Media::get($item, 'preview') }}" alt="">
            </div>

            <div class="dd-card__category">
                {{ $item->category->first()->name }}
            </div>

            <div class="dd-card__body">
                <div class="dd-card__body-inner">
                    <div class="dd-card__title">{{ $item->name }}</div>
                    <ul class="dd-card__meta-list">
                        <li class="dd-card__meta-item">{{ $item->square }} м<sup>2</sup></li>
                        <li class="dd-card__meta-item">{{ $item->country }}, {{ $item->city }}. {{ $item->year }} р.</li>
                        {{-- <li class="dd-card__meta-item">{{ $item->category->first()->name }}</li> --}}
                    </ul>

                    <a href="{{ route('project', ['slug' => $item->slug]) }}" class="button button-more _white">
                        Переглянути проект
                        <div class="button-more__circle">
                            <svg xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50%" cy="50%" r="22.5"></circle>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
@empty
@endforelse
